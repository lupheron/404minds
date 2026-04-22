import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Navbar from "@/src/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How AI Is Changing Our Future",
  description:
    "A university IT class project website about AI and how it is shaping education, healthcare, jobs, and daily life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-800/60 bg-slate-950">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {/* Brand col */}
              <div className="lg:col-span-1">
                <p className="text-base font-bold text-cyan-300">404 Minds</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  A university IT class project exploring how artificial intelligence is reshaping our world.
                </p>
              </div>

              {/* Topics */}
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-cyan-500">Topics</p>
                <ul className="space-y-2.5">
                  {[
                    { href: "/about", label: "About" },
                    { href: "/impact", label: "AI Impact" },
                    { href: "/timeline", label: "Timeline" },
                    { href: "/ethics", label: "Ethics" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-slate-400 transition hover:text-cyan-300">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sectors */}
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-emerald-500">Sectors</p>
                <ul className="space-y-2.5">
                  {[
                    { href: "/education", label: "Education" },
                    { href: "/healthcare", label: "Healthcare" },
                    { href: "/business", label: "Business" },
                    { href: "/daily-life", label: "Daily Life" },
                    { href: "/resources", label: "Resources" },
                    { href: "/presentation", label: "Presentation" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-slate-400 transition hover:text-emerald-300">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team + Media */}
              <div className="space-y-6">
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-violet-400">Team</p>
                  <ul className="space-y-2.5">
                    {[
                      { href: "/team", label: "All Members" },
                      { href: "/team/sukhrob", label: "Sukhrob" },
                      { href: "/team/firdavs", label: "Firdavs" },
                      { href: "/team/nurbek", label: "Nurbek" },
                      { href: "/team/farangiz", label: "Farangiz" },
                      { href: "/team/mubinabonu", label: "Mubinabonu" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-slate-400 transition hover:text-violet-300">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-amber-500">Media</p>
                  <ul className="space-y-2.5">
                    {[
                      { href: "/videos", label: "Long Videos" },
                      { href: "/shorts", label: "Shorts" },
                      { href: "/contact", label: "Contact" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-slate-400 transition hover:text-amber-300">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800/60 pt-6 text-xs text-slate-600">
              University IT class project · How AI Is Changing Our Future · 404 Minds
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
