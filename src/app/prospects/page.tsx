"use client";
import { useState } from "react";
import { prospects, segments } from "@/data/content";
import { useLocal } from "@/lib/useLocal";

const noNotes: Record<string, string> = {};

export default function Prospects() {
  const [seg, setSeg] = useState("all");
  const [notes, setNotes] = useLocal("lab.notes", noNotes);
  const list = prospects.filter((p) => seg === "all" || p.segmentId === seg);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Prospect workspace</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Eight <strong>fictional</strong> sample accounts. Research notes you type are saved in this browser only.
        </p>
      </header>

      <label className="flex items-center gap-2 text-sm font-medium">
        Segment
        <select value={seg} onChange={(e) => setSeg(e.target.value)} className="rounded-lg border border-line bg-white px-3 py-2">
          <option value="all">All segments</option>
          {segments.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      <ul className="grid gap-4 lg:grid-cols-2">
        {list.map((p) => (
          <li key={p.id} className="rounded-xl border border-line bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{p.practice}</h2>
                <p className="text-sm text-muted">
                  {p.contact} · {p.city} · {p.size} practitioner{p.size === "1" ? "" : "s"}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-sm font-bold ${p.fit >= 4 ? "bg-sun" : p.fit === 3 ? "bg-mint" : "bg-line"}`}
                title="Fit score out of 5"
              >
                Fit {p.fit}/5
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
              <dt className="text-muted">Segment</dt>
              <dd>{segments.find((s) => s.id === p.segmentId)?.name}</dd>
              <dt className="text-muted">Current tools</dt>
              <dd>{p.tools}</dd>
              <dt className="text-muted">Trigger</dt>
              <dd>{p.trigger}</dd>
              <dt className="text-muted">Likely pain</dt>
              <dd>{p.pain}</dd>
            </dl>
            <label className="mt-3 block text-sm font-medium">
              Research notes
              <textarea
                value={notes[p.id] ?? ""}
                onChange={(e) => setNotes({ ...notes, [p.id]: e.target.value })}
                rows={3}
                placeholder="What did you learn? Source, date, personalisation angle…"
                className="mt-1 w-full rounded-lg border border-line p-2 text-sm font-normal"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
