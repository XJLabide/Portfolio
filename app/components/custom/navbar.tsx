"use client";

import { useState, useEffect } from "react";
import { navSections } from "../../lib/site-content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
      const sections = navSections.map((section) => section.href);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust based on navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform
        ${scrolled ? "py-4" : "py-6"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        bg-black/30 backdrop-blur-md  shadow-md
      `}
    >
      <div className="w-full px-4 md:px-8">
        <nav className="flex justify-end space-x-8">
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navSections.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`transition-colors text-sm font-medium uppercase tracking-wider ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
