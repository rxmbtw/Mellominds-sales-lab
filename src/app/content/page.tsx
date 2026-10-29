import Image from "next/image";
import { posts, postLinks } from "@/data/content";

export const metadata = { title: "Lead-gen Content · MelloMinds Sales Lab" };

export default function Content() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Lead-generation content</h1>
        <p className="mt-2 max-w-2xl text-muted">
          LinkedIn posts MelloMinds published to reach practitioners. They are the top of the funnel that the outreach
          cadence follows up on.
        </p>
      </header>

      <section aria-labelledby="gallery">
        <h2 id="gallery" className="sr-only">
          Post gallery
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p) => (
            <figure key={p.img} className="rounded-xl border border-line bg-white p-3">
              <Image src={p.img} alt={p.alt} width={600} height={740} className="h-auto w-full rounded-lg" />
              <figcaption className="mt-2 text-sm text-muted">{p.note}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Original posts on LinkedIn</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {postLinks.map(([t, u]) => (
            <li key={u}>
              <a
                href={u}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-line bg-white p-4 font-medium hover:bg-mint"
              >
                {t} <span aria-hidden>↗</span>
                <span className="sr-only"> (opens LinkedIn in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-mint p-5">
        <h2 className="text-xl font-semibold">What the content does for sales</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          <li>Names a pain practitioners already feel (scattered tools, lost payment screenshots, missed sessions).</li>
          <li>Ends on a zero-risk offer: the Free plan, no credit card.</li>
          <li>Gives me a warm reference in outreach: &ldquo;you may have seen our post on…&rdquo;.</li>
        </ul>
      </section>
    </div>
  );
}
