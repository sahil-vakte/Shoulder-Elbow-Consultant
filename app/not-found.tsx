import Link from "next/link";
import JointIllustration from "@/components/JointIllustration";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80vh] items-center gap-10 pt-32 md:grid-cols-2">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="h-display mt-5">This page seems to have dislocated.</h1>
        <p className="lead mt-5">The page you're looking for has moved or no longer exists.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/conditions" className="btn-ghost">Browse conditions</Link>
        </div>
      </div>
      <JointIllustration region="shoulder" spot="labrum" className="mx-auto w-full max-w-md" />
    </section>
  );
}
