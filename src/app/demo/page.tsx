import ZoomImage from "@/components/ZoomImage";
import ChapterVideo from "@/components/ChapterVideo";
import RoiCalc from "@/components/RoiCalc";
import { demoFlow, discovery, objections, videos } from "@/data/content";

export const metadata = { title: "Product Demo & Case Study · MelloMinds Sales Lab" };

export default function Demo() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Product demo & case study</h1>
        <p className="mt-2 max-w-2xl text-muted">
          How I would run a 20-minute Zoom demo: discover first, then show only what answers their pain.
        </p>
      </header>

      <section className="rounded-xl bg-mint p-5">
        <h2 className="text-xl font-semibold">Value proposition</h2>
        <p className="mt-2 text-lg">
          Bookings, payments and session notes in one place, not five apps and a notebook. It gives you a few hours
          back, and the clinical call always stays with you.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-2xl font-semibold">See it in motion</h2>
        <p className="mb-4 text-sm text-muted">
          MelloMinds&apos; own promo videos. Click a chapter to jump to that part; I use these to warm up a prospect before the call.
        </p>
        <div className="grid items-start gap-5 lg:grid-cols-[1.6fr_1fr]">
          {videos.map((v) => (
            <ChapterVideo key={v.src} v={v} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">1. Discovery (5 minutes)</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {discovery.map(([stage, q]) => (
            <div key={q} className="rounded-xl border border-line bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{stage}</p>
              <p className="mt-1 text-sm">{q}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">2. Demo flow (12 minutes)</h2>
        <p className="mb-4 text-sm text-muted">Screens are from the real app with personal details blurred.</p>
        <ol className="space-y-6">
          {demoFlow.map((s) => (
            <li key={s.title} className="grid items-center gap-4 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.say}</p>
              </div>
              <ZoomImage src={`/images/app/${s.img}.png`} alt={`MelloMinds ${s.img} screen`} />
            </li>
          ))}
        </ol>
      </section>

      <RoiCalc />

      <section>
        <h2 className="mb-3 text-2xl font-semibold">3. Objection handling</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {objections.map(([o, a]) => (
            <div key={o} className="rounded-xl border border-line bg-white p-4">
              <p className="font-semibold">&ldquo;{o}&rdquo;</p>
              <p className="mt-1 text-sm text-muted">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-line bg-white p-5">
        <h2 className="text-xl font-semibold">4. Close (3 minutes)</h2>
        <p className="mt-2 text-sm">
          Recap their top two pains, then ask for one small commitment: create a free account and one booking link
          together on the call. Book a 10-minute check-in for day 7.
        </p>
      </section>
    </div>
  );
}
