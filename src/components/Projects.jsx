import { useRef, useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ImageOff,
} from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionLabel } from "./About";
import { useInView } from "../hooks/useInView";

function GithubIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// Badge color mapping
const BADGE_STYLES = {
  accent: { bg: "rgba(79,255,176,0.12)", color: "#4FFFB0", border: "rgba(79,255,176,0.25)" },
  blue:   { bg: "rgba(27,152,245,0.12)", color: "#1B98F5", border: "rgba(27,152,245,0.25)" },
  purple: { bg: "rgba(167,139,250,0.12)", color: "#A78BFA", border: "rgba(167,139,250,0.25)" },
  yellow: { bg: "rgba(251,191,36,0.12)", color: "#FBBF24", border: "rgba(251,191,36,0.25)" },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter" data-visible={inView}>
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "#E8F0FE", letterSpacing: "-1px" }}
          >
            Projects
          </h2>
          <p className="text-base mb-12 max-w-lg" style={{ color: "#8899AA" }}>
            A mix of production-grade apps, AI systems, and hackathon builds.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [imgIndex, setImgIndex] = useState(0);

  // Filter out null images
  const validImages = project.images.filter(Boolean);
  const badge = BADGE_STYLES[project.badgeColor] || BADGE_STYLES.blue;

  const prevImg = () =>
    setImgIndex((i) => (i - 1 + validImages.length) % validImages.length);
  const nextImg = () =>
    setImgIndex((i) => (i + 1) % validImages.length);

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden flex flex-col section-enter group hover:scale-[1.01] transition-all duration-300"
      data-visible={inView}
      style={{
        background: "rgba(13, 21, 38, 0.9)",
        border: "1px solid #1E2D45",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(79,255,176,0.25)";
        e.currentTarget.style.boxShadow = "0 12px 48px rgba(79,255,176,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1E2D45";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image carousel */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ background: "rgba(5, 10, 20, 0.8)" }}
      >
        {validImages.length > 0 ? (
          <>
            <img
              src={validImages[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Carousel controls */}
            {validImages.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{ background: "rgba(5,10,20,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#E8F0FE" }}
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{ background: "rgba(5,10,20,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#E8F0FE" }}
                >
                  <ChevronRight size={14} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {validImages.map((_, di) => (
                    <button
                      key={di}
                      onClick={() => setImgIndex(di)}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: di === imgIndex ? "16px" : "6px",
                        height: "6px",
                        background: di === imgIndex ? "#4FFFB0" : "rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          // Placeholder when no images are provided
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: "rgba(19, 30, 51, 0.8)" }}
          >
            <ImageOff size={28} style={{ color: "#1E2D45" }} />
            <span
              className="text-xs font-mono"
              style={{ color: "#1E2D45" }}
            >
              {/* [IMAGE PLACEHOLDER] Add image URLs in portfolio.js */}
              Backend Project
            </span>
          </div>
        )}

        {/* Image counter badge */}
        {validImages.length > 1 && (
          <div
            className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: "rgba(5,10,20,0.8)", color: "#8899AA", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {imgIndex + 1}/{validImages.length}
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Badge + title */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono mb-2"
              style={{
                background: badge.bg,
                color: badge.color,
                border: `1px solid ${badge.border}`,
              }}
            >
              {project.badge}
            </span>
            <h3
              className="font-display font-bold text-base"
              style={{ color: "#E8F0FE" }}
            >
              {project.title}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "#8899AA" }}>
              {project.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-2 flex-shrink-0 mt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded flex items-center justify-center transition-all duration-150"
                style={{ color: "#8899AA", border: "1px solid #1E2D45" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E8F0FE";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8899AA";
                  e.currentTarget.style.borderColor = "#1E2D45";
                }}
              >
                <GithubIcon size={13} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded flex items-center justify-center transition-all duration-150"
                style={{ color: "#8899AA", border: "1px solid #1E2D45" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#4FFFB0";
                  e.currentTarget.style.borderColor = "rgba(79,255,176,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8899AA";
                  e.currentTarget.style.borderColor = "#1E2D45";
                }}
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#8899AA" }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "#8899AA" }}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#4FFFB0" }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: "1px solid #1E2D45" }}>
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{
                background: "rgba(79,255,176,0.05)",
                color: "#8899AA",
                border: "1px solid rgba(79,255,176,0.1)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
