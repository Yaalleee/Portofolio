type ProjectCardProps = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github?: string;
};

export default function ProjectCard({ title, desc, tags, link, github }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/50 p-6 ring-1 ring-white/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 text-sm">
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="font-medium text-white underline-offset-4 transition hover:text-sky-300 hover:underline">
          Lihat Demo
        </a>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}