import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/impact", label: "Impact" },
    { href: "/videos", label: "Videos" },
    { href: "/shorts", label: "Shorts" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <Link href="/" className="text-sm font-bold tracking-wide text-cyan-300 sm:text-base">
              404 Minds | AI Future
            </Link>
            <nav className="flex flex-wrap items-center justify-end gap-2 text-xs sm:gap-3 sm:text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-800 px-3 py-1.5 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800 bg-slate-950">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
            <p>Built for university IT class project: How AI Is Changing Our Future.</p>
            <p>Fully responsive and Vercel-ready Next.js app.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
