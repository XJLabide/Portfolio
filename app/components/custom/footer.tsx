import Link from "next/link";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:labide.xj@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/labidexj/",
  },
  {
    label: "GitHub",
    href: "https://github.com/XJLabide",
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] px-4 py-10 text-[#f6f1e8] sm:px-6 lg:px-10">
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(194,255,107,0.07),_transparent_22%),radial-gradient(circle_at_80%_40%,_rgba(255,123,84,0.08),_transparent_24%),linear-gradient(180deg,_rgba(3,3,3,0.98),_rgba(3,8,18,0.98))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/38">
            Xander Labide / 2026
          </p>
          <p className="mt-4 max-w-3xl text-2xl leading-tight text-[#f6f1e8]/84 sm:text-3xl">
            Building intelligence-driven products where strong UX, automation logic,
            and real execution meet.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:justify-items-end">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-[#f6f1e8]/62 transition-colors duration-200 hover:border-white/20 hover:text-[#f6f1e8]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1600px] border-t border-white/10 pt-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[#f6f1e8]/34">
          © 2026 Xander Labide
        </p>
      </div>
    </footer>
  );
}
