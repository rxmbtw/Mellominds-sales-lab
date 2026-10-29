"use client";
import { useState } from "react";
import { prospects, seedDeals, stages, type Deal, type Stage } from "@/data/content";
import { useLocal } from "@/lib/useLocal";

const name = (id: string) => prospects.find((p) => p.id === id)?.practice ?? id;

export default function Pipeline() {
  const [deals, setDeals] = useLocal<Deal[]>("lab.deals", seedDeals);
  const [dragId, setDragId] = useState<string | null>(null);

  const move = (id: string, stage: Stage) => setDeals(deals.map((d) => (d.id === id ? { ...d, stage } : d)));
  const idx = (s: Stage) => stages.indexOf(s);
  // ponytail: funnel ignores Lost deals; track lost-from-stage if reporting needs it
  const live = deals.filter((d) => d.stage !== "Lost");
  const reached = (s: Stage) => live.filter((d) => idx(d.stage) >= idx(s)).length;
  const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)}%` : "–");
  const unadded = prospects.filter((p) => !deals.some((d) => d.id === p.id));

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">CRM pipeline</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Drag a card to a new stage, or use the stage menu on the card. Changes are saved in this browser only.
        </p>
      </header>

      <dl className="grid gap-3 sm:grid-cols-4">
        {[
          ["Contacted → Replied", pct(reached("Replied"), reached("Contacted"))],
          ["Replied → Demo booked", pct(reached("Demo booked"), reached("Replied"))],
          ["Demo done → Free plan", pct(reached("Free plan started"), reached("Demo done"))],
          ["Free plan → Upgraded", pct(reached("Upgraded"), reached("Free plan started"))],
        ].map(([t, v]) => (
          <div key={t} className="rounded-xl bg-mint p-4">
            <dt className="text-sm text-muted">{t}</dt>
            <dd className="text-2xl font-bold">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        {unadded.length > 0 && (
          <label className="flex items-center gap-2 font-medium">
            Add prospect
            <select
              value=""
              onChange={(e) => e.target.value && setDeals([...deals, { id: e.target.value, stage: "New", nextStep: "Research current tools" }])}
              className="rounded-lg border border-line bg-white px-3 py-2 font-normal"
            >
              <option value="">Choose…</option>
              {unadded.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.practice}
                </option>
              ))}
            </select>
          </label>
        )}
        <button onClick={() => setDeals(seedDeals)} className="rounded-lg border border-line bg-white px-3 py-2 font-medium hover:bg-mint">
          Reset sample data
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4">
        {stages.map((s) => (
          <section
            key={s}
            aria-label={s}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => dragId && (move(dragId, s), setDragId(null))}
            className="w-60 shrink-0 rounded-xl bg-white/70 p-3 ring-1 ring-line"
          >
            <h2 className="mb-2 flex justify-between text-sm font-semibold">
              {s}
              <span className="text-muted">{deals.filter((d) => d.stage === s).length}</span>
            </h2>
            <ul className="min-h-16 space-y-2">
              {deals
                .filter((d) => d.stage === s)
                .map((d) => (
                  <li
                    key={d.id}
                    draggable
                    onDragStart={() => setDragId(d.id)}
                    className="cursor-grab rounded-lg border border-line bg-white p-3 text-sm shadow-sm"
                  >
                    <p className="font-semibold">{name(d.id)}</p>
                    <p className="mt-1 text-muted">Next: {d.nextStep}</p>
                    <label className="sr-only" htmlFor={`st-${d.id}`}>
                      Stage for {name(d.id)}
                    </label>
                    <select
                      id={`st-${d.id}`}
                      value={d.stage}
                      onChange={(e) => move(d.id, e.target.value as Stage)}
                      className="mt-2 w-full rounded border border-line bg-white px-2 py-1"
                    >
                      {stages.map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
