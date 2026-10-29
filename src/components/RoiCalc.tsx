"use client";
import { useState } from "react";

const num = (v: string) => Math.max(0, Number(v) || 0);

export default function RoiCalc() {
  const [hours, setHours] = useState("5");
  const [pct, setPct] = useState("30");
  const [rate, setRate] = useState("1000");
  const [users, setUsers] = useState("1");

  const u = Math.max(1, Math.round(num(users)));
  const cost = u === 1 ? 699 : 899 * u; // list prices; Individual for 1, Team per user otherwise
  const hrsBack = num(hours) * 4.33 * (Math.min(num(pct), 100) / 100);
  const value = Math.round(hrsBack * num(rate));

  const field = (label: string, v: string, set: (s: string) => void) => (
    <label className="block text-sm font-medium">
      {label}
      <input inputMode="numeric" value={v} onChange={(e) => set(e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 font-normal" />
    </label>
  );

  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <h2 className="text-xl font-semibold">Value check with the prospect&apos;s own numbers</h2>
      <p className="mt-1 text-sm text-muted">
        Illustrative only. Fill it in live during the call; do not quote the output as a promise.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {field("Admin hours per week", hours, setHours)}
        {field("% they expect to reclaim", pct, setPct)}
        {field("Value of an hour (₹)", rate, setRate)}
        {field("Practitioners", users, setUsers)}
      </div>
      <p className="mt-4 text-lg" aria-live="polite">
        ≈ {hrsBack.toFixed(1)} hrs/month back, worth <strong>₹{value.toLocaleString("en-IN")}</strong> vs plan cost{" "}
        <strong>₹{cost.toLocaleString("en-IN")}</strong>/month.
      </p>
    </div>
  );
}
