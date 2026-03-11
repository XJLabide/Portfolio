import { StickyScrollReveal } from "../components/ui/sticky-scroll-reveal";
import { skillsContent } from "../lib/site-content";

const content = skillsContent.map((item) => ({
  title: item.title,
  description: item.description,
  eyebrow: item.eyebrow,
  accent: item.accent,
  stack: item.stack,
  content: (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {item.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#f6f1e8]/78"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        {item.items.map((skill, index) => (
          <div
            key={skill}
            className="grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-[auto_1fr]"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/35">
              0{index + 1}
            </span>
            <p className="text-base leading-8 text-[#f6f1e8]/76">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ),
}));

export default function SkillsPage() {
  return <StickyScrollReveal content={content} />;
}
