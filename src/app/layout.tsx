import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Nav from "@/components/Nav";
import { author } from "@/data/content";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MelloMinds Sales Lab",
  description:
    "A sales-strategy portfolio project: ICP, prospecting, pipeline, outreach and demo for MelloMinds, a practice-management app for therapists in India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="bg-ink">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <p className="mb-2 text-sm font-semibold text-white">
              Mello<span className="text-sun">Minds</span> Sales Lab
            </p>
            <Nav />
          </div>
        </header>
        <div className="bg-sun/60 px-4 py-2 text-center text-xs text-ink">
          Independent portfolio project. Prospects are <strong>fictional samples</strong>. Product facts come from
          MelloMinds&apos; public docs and posts.
        </div>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
        <footer className="border-t border-line px-4 py-6 text-center text-sm text-muted">
          Built by {author}: MelloMinds backend, deployment and hosting; sales strategy in this lab.
        </footer>
      </body>
    </html>
  );
}
