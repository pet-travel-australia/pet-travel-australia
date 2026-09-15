import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section flex flex-col items-center py-28 text-center">
      <p className="label-eyebrow">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl">
        This route doesn&rsquo;t exist either.
      </h1>
      <p className="mt-3 max-w-md text-ink-900/65">
        Unlike a lot of pet transport policy, this one&rsquo;s an easy fix — head back home.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to homepage
      </Link>
    </div>
  );
}
