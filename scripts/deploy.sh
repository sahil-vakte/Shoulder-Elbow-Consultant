#!/usr/bin/env bash
set -Eeuo pipefail
release=${1:?Commit SHA required}
[[ "$release" =~ ^[a-f0-9]{40}$ ]] || { echo 'Invalid release ID'; exit 1; }
base=/opt/shoulder-elbow
exec 9>"$base/deploy.lock"
flock -w 180 9
target="$base/releases/$release"
previous=$(readlink -f "$base/current" || true)
if [[ ! -d "$target" ]]; then
  mkdir -p "$target"
  tar -xzf "$base/incoming/$release.tar.gz" -C "$target"
fi
test -f "$target/server.js"
ln -sfn "$target" "$base/current.next"
mv -Tf "$base/current.next" "$base/current"
healthy=false
if sudo -n /usr/bin/systemctl restart shoulder-elbow.service; then
  for attempt in $(seq 1 30); do
    if curl -fsS --max-time 5 http://127.0.0.1:3091/deployment.json | grep -q "$release" &&
       curl -fsS --max-time 5 http://127.0.0.1:3091/ -o /dev/null; then
      healthy=true
      break
    fi
    sleep 2
  done
fi
if [[ "$healthy" != true ]]; then
  if [[ -n "$previous" && -d "$previous" && "$previous" != "$target" ]]; then
    ln -sfn "$previous" "$base/current.next"
    mv -Tf "$base/current.next" "$base/current"
    sudo -n /usr/bin/systemctl restart shoulder-elbow.service
    echo "Deployment failed; restored $previous"
  fi
  exit 1
fi
rm -f "$base/incoming/$release.tar.gz"
# Retain the current release and the four most recently deployed alternatives.
find "$base/releases" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' |
  sort -nr | tail -n +6 | cut -d' ' -f2- |
  while IFS= read -r old; do
    if [[ "$old" != "$target" && "$old" != "$previous" && "$old" =~ ^/opt/shoulder-elbow/releases/[a-f0-9]{40}$ ]]; then rm -rf -- "$old"; fi
  done
echo "Deployed $release"
