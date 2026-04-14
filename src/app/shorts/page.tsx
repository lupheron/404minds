import { shortVideos } from "@/src/lib/site-data";

export default function ShortsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">YouTube Shorts (45+ seconds)</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          These quick videos summarize AI ideas in short, engaging clips suitable for fast learning and presentation
          preparation.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        {shortVideos.map((video) => (
          <article key={video.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-800">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white">{video.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{video.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
