import Link from "next/link";

export default function Home() {
  const quickLinks = [
    { href: "/about", title: "About Project", desc: "Who we are and what this project covers." },
    { href: "/team", title: "Meet the Team", desc: "See each member profile and contributions." },
    { href: "/videos", title: "Long Videos", desc: "Five YouTube videos (3+ minutes each)." },
    { href: "/shorts", title: "Short Videos", desc: "Five YouTube shorts (45+ seconds each)." },
  ];

  const pageCategories = [
    {
      label: "Topics",
      accent: "cyan",
      headerClass: "text-cyan-400",
      borderClass: "border-cyan-900/40",
      bgClass: "from-cyan-950/30 to-transparent",
      hoverClass: "hover:border-cyan-600 hover:text-cyan-300",
      links: [
        { href: "/about", label: "About", desc: "Who we are & the project scope" },
        { href: "/impact", label: "AI Impact", desc: "How AI changes the world" },
        { href: "/timeline", label: "Timeline", desc: "History of AI milestones" },
        { href: "/ethics", label: "Ethics", desc: "Fairness & responsibility" },
      ],
    },
    {
      label: "Sectors",
      accent: "emerald",
      headerClass: "text-emerald-400",
      borderClass: "border-emerald-900/40",
      bgClass: "from-emerald-950/30 to-transparent",
      hoverClass: "hover:border-emerald-600 hover:text-emerald-300",
      links: [
        { href: "/education", label: "Education", desc: "AI in schools & learning" },
        { href: "/healthcare", label: "Healthcare", desc: "AI in medicine" },
        { href: "/business", label: "Business", desc: "AI in industry & economy" },
        { href: "/daily-life", label: "Daily Life", desc: "AI in everyday routines" },
        { href: "/resources", label: "Resources", desc: "Further reading & links" },
        { href: "/presentation", label: "Presentation", desc: "Our class presentation" },
      ],
    },
    {
      label: "Media",
      accent: "amber",
      headerClass: "text-amber-400",
      borderClass: "border-amber-900/40",
      bgClass: "from-amber-950/30 to-transparent",
      hoverClass: "hover:border-amber-600 hover:text-amber-300",
      links: [
        { href: "/videos", label: "Long Videos", desc: "Five full-length YouTube videos" },
        { href: "/shorts", label: "Shorts", desc: "Five YouTube short clips" },
      ],
    },
    {
      label: "People",
      accent: "violet",
      headerClass: "text-violet-400",
      borderClass: "border-violet-900/40",
      bgClass: "from-violet-950/30 to-transparent",
      hoverClass: "hover:border-violet-600 hover:text-violet-300",
      links: [
        { href: "/team", label: "Our Team", desc: "Meet all 5 members" },
        { href: "/contact", label: "Contact", desc: "Get in touch with us" },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-900/30 bg-gradient-to-br from-cyan-700/20 via-slate-900 to-slate-950 p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">University IT Class Project</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          How AI Is Changing Our Future
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          We are <strong>404 Minds</strong>, a student team exploring how artificial intelligence is reshaping
          education, healthcare, work, ethics, and everyday life. This website includes our research sections,
          team pages, and required videos for the semester.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/team"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Meet the Team
          </Link>
          <Link
            href="/presentation"
            className="rounded-full border border-cyan-400 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-950/60"
          >
            View Presentation Plan
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {quickLinks.map((link) => (
          <article key={link.href} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">{link.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{link.desc}</p>
            <Link href={link.href} className="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Open page →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <h2 className="text-2xl font-semibold text-white">Project Requirements Covered</h2>
        <ul className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 sm:text-base">
          <li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">20 total website pages/routes</li>
          <li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">5 long YouTube videos (3+ min)</li>
          <li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">5 YouTube shorts (45+ sec)</li>
          <li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">Team member profiles + tasks</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">Explore the Site</h2>
        <p className="mt-1.5 text-sm text-slate-400">Every page, organized by category.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pageCategories.map((cat) => (
            <div
              key={cat.label}
              className={`rounded-2xl border bg-gradient-to-b p-5 ${cat.borderClass} ${cat.bgClass}`}
            >
              <p className={`mb-4 text-[11px] font-bold uppercase tracking-widest ${cat.headerClass}`}>
                {cat.label}
              </p>
              <ul className="space-y-1">
                {cat.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`group flex flex-col rounded-xl border border-transparent px-3 py-2.5 transition ${cat.hoverClass} hover:bg-slate-900/60`}
                    >
                      <span className="text-sm font-medium text-slate-200 transition group-hover:text-inherit">
                        {l.label}
                      </span>
                      <span className="mt-0.5 text-xs text-slate-500">{l.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
