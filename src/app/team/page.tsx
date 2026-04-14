import Link from "next/link";
import { teamMembers } from "@/src/lib/site-data";

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Our Team</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Team 404 Minds</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Click each team member to view their profile, YouTube work, and Trello tasks. Update names and details as
          needed for your final submission.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{member.role}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{member.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{member.intro}</p>
            <Link href={member.route} className="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Open profile →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
