import { disqualifiers, fitRubric, segments } from "@/data/content";

export const metadata = { title: "Ideal Customer Profile · MelloMinds Sales Lab" };

export default function Icp() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Ideal Customer Profile</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Four segments of the people MelloMinds&apos; docs say it serves: therapists, counsellors, psychiatrists and
          clinics in India.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {segments.map((s) => (
          <article key={s.id} className="rounded-xl border border-line bg-white p-5">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="text-sm text-muted">{s.who}</p>
            <p className="mt-3 inline-block rounded-full bg-sun px-3 py-1 text-sm font-medium">Plan fit: {s.plan}</p>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">Likely problems</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {s.pains.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">Buying triggers</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {s.triggers.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg bg-mint p-3 text-sm">
              <strong>Hook:</strong> {s.hook}
            </p>
          </article>
        ))}
      </div>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">Disqualify early</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {disqualifiers.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">Fit score (1–5)</h2>
          <table className="mt-2 w-full text-sm">
            <tbody>
              {fitRubric.map(([n, d]) => (
                <tr key={n} className="border-t border-line">
                  <th scope="row" className="w-10 py-2 text-left font-bold">
                    {n}
                  </th>
                  <td className="py-2">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
