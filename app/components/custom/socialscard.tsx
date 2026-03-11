import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SocialCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  href?: string;
  accent?: string;
}

const SocialCard = ({
  title,
  icon,
  description,
  href = "#",
  accent = "#c2ff6b",
}: SocialCardProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[rgba(255,255,255,0.025)] px-5 py-5 transition-colors duration-300 hover:bg-white/[0.045]"
        whileHover={{ x: 8 }}
      >
        <div
          className="absolute inset-y-0 left-0 w-px opacity-80"
          style={{ backgroundColor: accent }}
        />

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="rounded-[1.1rem] border border-white/10 p-3 transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ color: accent, backgroundColor: `${accent}12` }}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.26em] text-[#f6f1e8]">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#f6f1e8]/55">{description}</p>
            </div>
          </div>

          <ArrowUpRight className="h-4 w-4 text-white/38 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/70" />
        </div>
      </motion.div>
    </Link>
  );
};

export default SocialCard;
