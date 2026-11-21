# Production deployment

Push to `main` to build, smoke test and deploy via GitHub Actions. Pull requests run the build and smoke tests without deployment. The workflow can also be started manually from the Actions tab.

- Repository: https://github.com/sahil-vakte/Shoulder-Elbow-Consultant
- Domain: https://shoulderelbowconsultant.co.uk
- IP preview: http://92.205.160.39:8080
- Runtime: Node 22, Next.js standalone, systemd, Nginx
- Service: `shoulder-elbow.service`, bound to `127.0.0.1:3091`
- Releases: `/opt/shoulder-elbow/releases/<commit>`; active release: `/opt/shoulder-elbow/current`
- Runtime environment: `/opt/shoulder-elbow/shared/environment`

GitHub repository secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`. The SSH key is for the dedicated `sec-deploy` account. This account may restart only this service via sudo. The server's SSH host key is pinned. No server password belongs in the repository.

The build happens on the GitHub runner. Only the packaged application is uploaded. Deployment switches the active symlink, restarts the service and checks the homepage and commit identifier. Failed health checks restore the previous release. Five recent releases are retained. A short restart interruption is possible.

## Connect the domain

At your DNS provider, replace the existing web hosting records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 92.205.160.39 |
| CNAME | www | shoulderelbowconsultant.co.uk |

Remove conflicting A/AAAA records or old hosting/CDN aliases for these two names. Preserve mail records. DNS propagation is external to deployment.

After both names resolve to this server, enable HTTPS on the server:

```bash
sudo certbot --nginx -d shoulderelbowconsultant.co.uk -d www.shoulderelbowconsultant.co.uk
sudo certbot renew --dry-run
```

## Operations

```bash
sudo systemctl status shoulder-elbow
sudo journalctl -u shoulder-elbow -n 100 --no-pager
curl http://127.0.0.1:3091/deployment.json
```

For a manual rollback, set `/opt/shoulder-elbow/current` to a previously verified release and restart `shoulder-elbow`. Keep the existing runtime environment file.

## Practice details and enquiries

The owner will supply the actual consultant, phone and clinic details later. Edit `lib/site.ts` and the corresponding content when available. The generated garden image is illustrative lifestyle artwork, not a patient or consultant photograph.

Enquiries return HTTP 503 until a delivery provider is configured; no patient details are logged. Configure `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and a verified `ENQUIRY_FROM_EMAIL`, or `ENQUIRY_WEBHOOK_URL`, in the server runtime environment and restart the service. Public build-time variables belong in the workflow. Do not commit credentials.
