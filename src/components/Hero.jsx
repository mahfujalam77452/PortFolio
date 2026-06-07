import { useEffect, useRef, useState } from "react";
import { Mail, ChevronDown } from "lucide-react";
import { personal } from "../data/portfolio";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const TYPED_STRINGS = [
  "MERN Stack Developer",
  "Competitive Programmer",
  "AI App Builder",
  "Full-Stack Engineer",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    const speed = deleting ? 45 : charIndex === current.length ? 1800 : 70;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTyped(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (deleting && charIndex > 0) {
        setTyped(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setStringIndex((i) => (i + 1) % TYPED_STRINGS.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typed, charIndex, deleting, stringIndex]);

  // Particle canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 255, 176, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 255, 176, ${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4FFFB0, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B98F5, transparent)" }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#4FFFB0 1px, transparent 1px), linear-gradient(90deg, #4FFFB0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Avatar */}
        {personal.avatar ? (
          <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: "0ms" }}>
            <div
              className="w-40 h-40 rounded-full border-2 overflow-hidden"
              style={{
                borderColor: "#4FFFB0",
                boxShadow: "0 0 40px rgba(79,255,176,0.3)",
              }}
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="mb-8 flex justify-center" style={{ animationDelay: "0ms" }}>
            {/* [IMAGE PLACEHOLDER] Avatar will appear here when you add a URL in personal.avatar */}
            <div
              className="w-40 h-40 rounded-full border-2 flex items-center justify-center font-display font-bold text-2xl"
              style={{
                borderColor: "#4FFFB0",
                background: "rgba(79,255,176,0.08)",
                color: "#4FFFB0",
                boxShadow: "0 0 40px rgba(79,255,176,0.2)",
              }}
            >
              MA
            </div>
          </div>
        )}

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-6"
          style={{
            background: "rgba(79,255,176,0.08)",
            border: "1px solid rgba(79,255,176,0.2)",
            color: "#4FFFB0",
            animation: "fadeIn 0.5s ease forwards",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#4FFFB0",
              boxShadow: "0 0 8px #4FFFB0",
              animation: "glowPulse 2s ease-in-out infinite",
            }}
          />
          Available for opportunities
        </div>

        {/* Name */}
   <h1
  className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-4 pb-2"
  style={{
    color: "#E8F0FE",
    letterSpacing: "-2px",
    lineHeight: "1.15",
    animation: "fadeUp 0.6s ease 0.1s both",
  }}
>
  Md. Mahfuj
  <br />
  <span style={{ color: "#4FFFB0" }}>Alam</span>
</h1>

        {/* Typewriter */}
        <div
          className="font-mono text-lg md:text-2xl mb-6 h-8"
          style={{
            color: "#8899AA",
            animation: "fadeUp 0.6s ease 0.2s both",
          }}
        >
          <span style={{ color: "#4FFFB0" }}>&gt;</span>{" "}
          <span style={{ color: "#E8F0FE" }}>{typed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "#4FFFB0",
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "cursorBlink 1s step-end infinite",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="max-w-xl mx-auto text-base md:text-lg mb-10"
          style={{
            color: "#8899AA",
            lineHeight: "1.7",
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animation: "fadeUp 0.6s ease 0.4s both" }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "#4FFFB0",
              color: "#050A14",
              boxShadow: "0 0 30px rgba(79,255,176,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 50px rgba(79,255,176,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px rgba(79,255,176,0.3)";
            }}
          >
            View Projects
          </a>
          {personal.resumeLink && (
            <a
              href={personal.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 hover:scale-105 border"
              style={{
                borderColor: "rgba(79,255,176,0.3)",
                color: "#E8F0FE",
                background: "rgba(79,255,176,0.05)",
              }}
            >
              Download CV
            </a>
          )}
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4"
          style={{ animation: "fadeUp 0.6s ease 0.5s both" }}
        >
          {[
            { href: personal.github, icon: GithubIcon, label: "GitHub" },
            { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(79,255,176,0.08)",
                border: "1px solid rgba(79,255,176,0.15)",
                color: "#8899AA",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#4FFFB0";
                e.currentTarget.style.borderColor = "rgba(79,255,176,0.4)";
                e.currentTarget.style.background = "rgba(79,255,176,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8899AA";
                e.currentTarget.style.borderColor = "rgba(79,255,176,0.15)";
                e.currentTarget.style.background = "rgba(79,255,176,0.08)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          style={{ animation: "fadeUp 0.6s ease 0.6s both" }}
        >
          {[
            { value: "1000+", label: "CF Problems Solved" },
            { value: "1425", label: "CF Rating" },
            { value: "6+", label: "Projects Built" },
            { value: "3.45", label: "CGPA (SUST)" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-display font-bold text-2xl md:text-3xl"
                style={{ color: "#4FFFB0" }}
              >
                {value}
              </div>
              <div
                className="text-xs font-body mt-0.5"
                style={{ color: "#8899AA" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-body transition-opacity hover:opacity-100"
        style={{ color: "#8899AA", opacity: 0.5 }}
      >
        <span>scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
