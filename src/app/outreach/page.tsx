"use client";
import { useState } from "react";
import { author, cadence, personalisation, prospects, templates } from "@/data/content";

export default function Outreach() {
  const [pid, setPid] = useState(prospects[0].id);
  const [tid, setTid] = useState(templates[0].id);
  const [edit, setEdit] = useState<{ key: string; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  const p = prospects.find((x) => x.id === pid)!;
  const t = templates.find((x) => x.id === tid)!;
  const vars: Record<string, string> = { contact: p.contact, practice: p.practice, city: p.city, pain: p.pain, sender: author };
  const rendered = t.body.replace(/\{\{(\w+)\}\}/g, (_, k: string) => vars[k] ?? "");
  const key = `${pid}|${tid}`;
  const text = edit?.key === key ? edit.text : rendered;
  const over = t.limit !== undefined && text.length > t.limit;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Outreach studio</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Pick a prospect and a message. The template fills in their details; edit freely before copying.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <label className="block text-sm font-medium">
            Prospect
            <select value={pid} onChange={(e) => setPid(e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 font-normal">
              {prospects.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.practice} ({x.city})
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium">
            Message
            <select value={tid} onChange={(e) => setTid(e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 font-normal">
              {templates.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.label}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="rounded-xl border border-line bg-white p-4">
            <legend className="px-1 text-sm font-semibold">Personalisation checklist</legend>
            {personalisation.map((c) => (
              <label key={c} className="flex items-start gap-2 py-1 text-sm">
                <input
                  type="checkbox"
                  checked={checked.includes(c)}
                  onChange={() => setChecked(checked.includes(c) ? checked.filter((x) => x !== c) : [...checked, c])}
                  className="mt-1"
                />
                {c}
              </label>
            ))}
            <p className="mt-2 text-sm text-muted">
              {checked.length}/{personalisation.length} ready to send
            </p>
          </fieldset>
        </div>

        <div>
          <label htmlFor="msg" className="mb-1 block text-sm font-medium">
            {t.channel} draft
          </label>
          <textarea
            id="msg"
            value={text}
            onChange={(e) => setEdit({ key, text: e.target.value })}
            rows={14}
            className="w-full rounded-xl border border-line bg-white p-4 text-sm"
          />
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className={over ? "font-semibold text-red-700" : "text-muted"}>
              {text.length} characters{t.limit ? ` (limit ${t.limit})` : ""}
            </span>
            <button onClick={copy} className="rounded-lg bg-ink px-4 py-2 font-medium text-white hover:bg-ink/85">
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      <section className="rounded-xl border border-line bg-white p-5">
        <h2 className="text-xl font-semibold">6-touch cadence over 14 days</h2>
        <table className="mt-3 w-full text-left text-sm">
          <thead>
            <tr className="text-muted">
              <th className="py-2 font-medium">Day</th>
              <th className="py-2 font-medium">Channel</th>
              <th className="py-2 font-medium">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {cadence.map(([d, c, w]) => (
              <tr key={d} className="border-t border-line">
                <td className="py-2 font-semibold">{d}</td>
                <td className="py-2">{c}</td>
                <td className="py-2">{w}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
