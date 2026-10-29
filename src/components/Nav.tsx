"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/content";

export default function Nav() {
  const path = usePathname();
  return (
    <nav aria-label="Sections" className="flex gap-1 overflow-x-auto pb-1">
      {nav.map((n) => {
        const on = n.href === "/" ? path === "/" : path.startsWith(n.href);
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={on ? "page" : undefined}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ${
              on ? "bg-sun text-ink" : "text-white/80 hover:bg-white/10"
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}
