import Link from "next/link";
import { nav, plans } from "@/data/content";

const approach = [
  ["Segment", "Split the market into four practitioner types, each with its own pain, trigger and plan fit."],
  ["Prospect", "Research one pain and one trigger per account before writing a word."],
  ["Engage", "Run a fixed 6-touch cadence across email, LinkedIn and calls, then stop cleanly."],
  ["Demo", "Discover first, demo against their pain, and end on a free, no-card next step."],
];

const kpis = [
  ["Reply rate", "Replies ÷ prospects contacted"],
  ["Meetings booked", "Demos scheduled per week"],
  ["Demo → Free plan", "Demos that start a Free account"],
  ["Free → Paid", "Free accounts that upgrade to Individual or Team"],
];

export default function Overview() {
  return (
    <div className="space-y-12">
      <section>
        <p className="mb-2 text-sm font-medium text-muted">Executive overview</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          How I would take a practice-management app to therapists in India.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          MelloMinds puts bookings, payments and session notes in one place. I built its backend and helped design its
          deployment and hosting. This lab applies a sales process to the same product: who to target, how to reach
          them, and how to run the demo.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Business objective</h2>
        <p className="max-w-3xl">
          Turn practitioners who run on WhatsApp, spreadsheets and notebooks into active MelloMinds users. The
          free plan lowers the first step, so the job is to get a qualified practitioner into a demo, then onto the
          Free plan, then onto a paid plan once it earns its place.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Approach</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map(([t, d], i) => (
            <li key={t} className="rounded-xl border border-line bg-white p-5">
              <span className="text-sm font-semibold text-muted">Step {i + 1}</span>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-1 text-2xl font-semibold">What I would measure</h2>
        <p className="mb-4 text-sm text-muted">These are the metrics I would track. Nothing here is a claimed result.</p>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-mint p-5">
              <dt className="font-semibold">{t}</dt>
              <dd className="mt-1 text-sm text-muted">{d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Pricing I am selling against</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-xl border border-line bg-white p-5">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-2xl font-bold">{p.price}</p>
              <p className="mt-2 text-sm text-muted">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Explore the lab</h2>
        <div className="flex flex-wrap gap-2">
          {nav.slice(1).map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-ink/85">
              {n.label} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
