import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && scrollPosition >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}

        <a
          href="#hero"
          onClick={() => handleNavClick("hero")}
          className="text-2xl sm:text-3xl font-bold tracking-wide shrink-0"
        >
          <span className="text-white">Sumayyah</span>
          <span className="text-purple-400">.</span>
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative font-medium text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                  active === link.id
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-purple-400"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-purple-400 rounded-full transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700 text-slate-200 hover:text-purple-400 hover:border-purple-500 transition-all duration-300"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}

      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="md:hidden overflow-hidden border-t border-slate-700/80 bg-[#172033] shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
      >
        <ul className="px-4 sm:px-6 py-2 sm:py-3 space-y-0.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  active === link.id
                    ? "text-purple-400 bg-slate-800"
                    : "text-slate-300 hover:text-purple-400 hover:bg-slate-800/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;