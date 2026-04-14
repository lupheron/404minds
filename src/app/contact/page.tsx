export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact & Collaboration</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          For class communication, collaboration, and project updates, use the team channels below. Replace the
          placeholders with your real contact information before final submission.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <h2 className="text-lg font-semibold text-white">Team Email</h2>
          <p className="mt-3 text-sm text-slate-300">404minds-project@example.com</p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <h2 className="text-lg font-semibold text-white">Trello Board</h2>
          <p className="mt-3 text-sm text-slate-300">Add your Trello board URL here for teacher review.</p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:col-span-2">
          <h2 className="text-lg font-semibold text-white">Presentation Notes</h2>
          <p className="mt-3 text-sm text-slate-300">
            Keep all final references, script notes, and assignments in a shared document for smooth presentation
            handoff.
          </p>
        </article>
      </section>
    </div>
  );
}
