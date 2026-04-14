export default function PresentationPage() {
  const outline = [
    "Opening: why AI matters now",
    "Current AI use across major industries",
    "Opportunities: productivity, personalization, innovation",
    "Challenges: bias, privacy, misinformation, job disruption",
    "Our selected videos and key takeaways",
    "Team contributions and Trello workflow",
    "Final conclusion and Q&A",
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Presentation Plan</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          This page structures our semester presentation so each team member can present clearly and confidently.
        </p>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <h2 className="text-xl font-semibold text-white">Slide Flow</h2>
        <ol className="mt-5 space-y-3">
          {outline.map((item, index) => (
            <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
              <span className="mr-2 font-semibold text-cyan-300">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
