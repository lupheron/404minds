type SectionPageProps = {
  title: string;
  subtitle: string;
  highlights: string[];
  points: string[];
};

export function SectionPage({ title, subtitle, highlights, points }: SectionPageProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="rounded-3xl border border-cyan-900/40 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 p-6 shadow-lg shadow-cyan-900/20 sm:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Project Section</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">{subtitle}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-cyan-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Key Discussion Points</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {points.map((point) => (
            <article key={point} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm leading-7 text-slate-300 sm:text-base">{point}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
