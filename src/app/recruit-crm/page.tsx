import { rcParallels } from "@/data/content";

export const metadata = { title: "Why Recruit CRM · MelloMinds Sales Lab" };

const icp = [
  ["Who", "Recruitment and staffing agencies, especially owner-led and small-to-mid teams (the role says you'll speak with business owners across Europe)."],
  ["Pains to listen for", "Candidate data in spreadsheets, missed follow-ups, outreach spread across tools, slow submissions to clients."],
  ["Triggers", "Hiring more recruiters, taking on a bigger client, outgrowing a spreadsheet or a basic ATS."],
];

const discovery = [
  "How do you source and track candidates today?",
  "What happens to a candidate after the first call?",
  "How many tools does a recruiter touch to submit one candidate?",
  "How are you following up with clients and candidates, and what slips?",
  "What would faster placements be worth to the agency?",
];

export default function RecruitCrm() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Why Recruit CRM</h1>
        <p className="mt-2 max-w-2xl text-muted">
          The same method I used for MelloMinds, pointed at Recruit CRM&apos;s buyer. Product facts below come from
          recruitcrm.io&apos;s own homepage.
        </p>
      </header>

      <section className="rounded-xl bg-mint p-5">
        <h2 className="text-xl font-semibold">What Recruit CRM says it is</h2>
        <p className="mt-2 text-sm">
          &ldquo;The AI-first ATS + CRM that helps recruitment agencies place more candidates, faster.&rdquo; It lists
          AI sourcing, outreach sequencing across LinkedIn, email and SMS, a drag-and-drop Kanban pipeline, in-app
          calling with automatic notes, and GDPR compliance.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {icp.map(([t, d]) => (
          <div key={t} className="rounded-xl border border-line bg-white p-5">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-line bg-white p-5">
        <h2 className="text-xl font-semibold">Pattern match: MelloMinds ↔ Recruit CRM</h2>
        <p className="mt-1 text-sm text-muted">Both replace scattered tools for a small service business with one workflow.</p>
        <table className="mt-3 w-full text-left text-sm">
          <thead>
            <tr className="text-muted">
              <th className="py-2 pr-4 font-medium">MelloMinds (therapists)</th>
              <th className="py-2 font-medium">Recruit CRM (recruiters)</th>
            </tr>
          </thead>
          <tbody>
            {rcParallels.map(([a, b]) => (
              <tr key={a} className="border-t border-line">
                <td className="py-2 pr-4">{a}</td>
                <td className="py-2">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">Discovery questions I would ask</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {discovery.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">What I bring</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>Cloud and backend background: I can follow technical, security and integration questions from agency owners.</li>
            <li>I have shipped a SaaS product and know how its users think about setup and adoption.</li>
            <li>Comfortable on any shift: US East, US West or Asia Pacific.</li>
            <li>Structured outreach: ICP, research, cadence, demo and a clean stop.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
