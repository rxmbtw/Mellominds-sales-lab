"use client";
import { useRef, useState } from "react";
import type { VideoItem } from "@/data/content";

export default function ChapterVideo({ v }: { v: VideoItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [t, setT] = useState(0);
  // active chapter = last one whose start time has passed
  const active = v.chapters.reduce((a, [s], i) => (t >= s ? i : a), 0);

  const jump = (s: number) => {
    const el = ref.current;
    if (!el) return;
    el.currentTime = s;
    void el.play().catch(() => {});
  };

  return (
    <figure className="rounded-xl border border-line bg-white p-4">
      <video
        ref={ref}
        controls
        playsInline
        preload="metadata"
        poster={v.poster}
        aria-label={v.title}
        onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
        className={`mx-auto w-full rounded-lg bg-ink ${v.portrait ? "max-h-[32rem] w-auto" : ""}`}
      >
        <source src={v.src} type="video/mp4" />
        Your browser can&apos;t play this video.
      </video>
      <figcaption className="mt-3">
        <p className="font-semibold">{v.title}</p>
        <p className="text-sm text-muted">{v.blurb}</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Chapters">
          {v.chapters.map(([s, label], i) => (
            <li key={s}>
              <button
                onClick={() => jump(s)}
                aria-current={i === active ? "true" : undefined}
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  i === active ? "bg-sun text-ink" : "bg-mint text-ink hover:bg-sun/60"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
