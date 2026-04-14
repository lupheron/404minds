import Link from "next/link";
import { TeamMember } from "@/src/lib/site-data";

type MemberPageProps = {
  member: TeamMember;
};

export function MemberPage({ member }: MemberPageProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Team Member Profile</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{member.name}</h1>
        <p className="mt-2 text-cyan-200">{member.role}</p>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{member.intro}</p>
      </section>

      <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white">YouTube Contributions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            href={member.youtubeVideo}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-cyan-500"
          >
            <p className="text-sm font-semibold text-cyan-300">Long Video (3+ mins)</p>
            <p className="mt-2 text-xs text-slate-400">Open YouTube video</p>
          </a>
          <a
            href={member.youtubeShort}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-cyan-500"
          >
            <p className="text-sm font-semibold text-cyan-300">Short Video (45+ secs)</p>
            <p className="mt-2 text-xs text-slate-400">Open YouTube short</p>
          </a>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white">Trello Task Summary</h2>
        <ul className="mt-4 space-y-2">
          {member.trelloTasks.map((task) => (
            <li key={task} className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
              {task}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6">
        <Link href="/team" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
          ← Back to Team
        </Link>
      </div>
    </div>
  );
}
