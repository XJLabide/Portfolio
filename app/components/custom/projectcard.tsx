'use client';

interface ProjectCardProps {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  repoUrl: string;
  imagePosition: 'left' | 'right';
}

const accentMap = {
  left: {
    background: "bg-[#0d0d0d]",
    frame: "border-[#c2ff6b]/20",
    badge: "text-[#c2ff6b]",
    panel: "bg-[radial-gradient(circle_at_top_left,_rgba(194,255,107,0.12),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))]",
  },
  right: {
    background: "bg-[#111111]",
    frame: "border-[#ff7b54]/20",
    badge: "text-[#ff7b54]",
    panel: "bg-[radial-gradient(circle_at_top_left,_rgba(255,123,84,0.14),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))]",
  },
} as const;

const ProjectCard = ({
  title,
  eyebrow,
  description,
  stack,
  repoUrl,
  imagePosition,
}: ProjectCardProps) => {
  const accent = accentMap[imagePosition];

  return (
    <article
      className={`group relative overflow-hidden rounded-[2.2rem] border ${accent.frame} ${accent.background} ${accent.panel} p-6 text-[#f6f1e8] transition-transform duration-300 hover:-translate-y-1 sm:p-8`}
    >
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/46">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#f6f1e8] sm:text-5xl">
            {title}
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#f6f1e8]/70 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f6f1e8]/78"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between gap-8 rounded-[1.8rem] border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.34em] ${accent.badge}`}>
              Public Repo
            </p>
            <p className="mt-4 text-sm leading-7 text-[#f6f1e8]/68 break-all">
              {repoUrl}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#f6f1e8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition-transform duration-300 hover:-translate-y-1"
            >
              View Repository
              <span className={accent.badge}>↗</span>
            </a>

            <div className="border-t border-white/10 pt-4">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/40">
                Positioning
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f6f1e8]/65">
                One of the public-facing projects that reflects my product thinking,
                interface direction, and build execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
