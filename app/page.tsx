import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Approach from "./pages/approach";
import Getintouch from "./pages/getintouch";
import Footer from "./components/custom/footer";
import { navSections } from "./lib/site-content";

export default function Home() {
  const sectionClassNames: Partial<Record<(typeof navSections)[number]["href"], string>> = {
    about: "min-h-screen",
    projects: "min-h-screen",
    skills: "min-h-screen",
    approach: "min-h-screen",
    contact: "min-h-screen",
  };

  const sectionComponents = {
    hero: <Hero />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    approach: <Approach />,
    contact: <Getintouch />,
  };

  return (
    <div className="space-y-0 bg-black">
      {navSections.map((section) => (
        <section
          key={section.href}
          id={section.href}
          className={sectionClassNames[section.href]}
        >
          {sectionComponents[section.href]}
        </section>
      ))}
      <Footer />
    </div>
  );
}
