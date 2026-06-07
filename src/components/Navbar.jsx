import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "CP", href: "#cp" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050A14]/90 backdrop-blur-md border-b border-[#1E2D45]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-xl tracking-tight"
          style={{ color: "#4FFFB0" }}
        >
          MA<span style={{ color: "#E8F0FE" }}>.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-body font-medium transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-[#4FFFB0]"
                    : "text-[#8899AA] hover:text-[#E8F0FE]"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-md opacity-10"
                    style={{ background: "#4FFFB0" }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-display font-semibold rounded-lg border transition-all duration-200"
            style={{
              borderColor: "#4FFFB0",
              color: "#4FFFB0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(79,255,176,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#8899AA] hover:text-[#4FFFB0] transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t mt-2 py-4 px-6 space-y-1"
          style={{
            background: "rgba(13, 21, 38, 0.98)",
            borderColor: "#1E2D45",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-body font-medium text-[#8899AA] hover:text-[#4FFFB0] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 py-2 text-sm font-display font-semibold text-center rounded-lg border"
            style={{ borderColor: "#4FFFB0", color: "#4FFFB0" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
