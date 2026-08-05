type SkillBadgeProps = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/50 px-4 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-white/10 backdrop-blur-xl transition hover:border-sky-300/50 hover:text-sky-200">
      {name}
    </span>
  );
}