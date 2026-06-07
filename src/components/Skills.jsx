import { useRef } from "react";
import { Code2, Globe, Cpu, Wrench, BarChart2 } from "lucide-react";
import { skills } from "../data/portfolio";
import { SectionLabel } from "./About";
import { useInView } from "../hooks/useInView";

// Map icon name strings to actual Lucide components
const ICON_MAP = { Code2, Globe, Cpu, Wrench, BarChart2 };

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: "rgba(13, 21, 38, 0.4)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="section-enter"
          data-visible={inView}
        >
          <SectionLabel>Technical Skills</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-12"
            style={{ color: "#E8F0FE", letterSpacing: "-1px" }}
          >
            What I Work With
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((category, i) => {
              const Icon = ICON_MAP[category.icon] || Code2;
              return (
                <SkillCard key={i} category={category} Icon={Icon} delay={i * 80} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, Icon, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-300 section-enter"
      data-visible={inView}
      style={{
        background: "rgba(13, 21, 38, 0.9)",
        border: "1px solid #1E2D45",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(79,255,176,0.3)";
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(79,255,176,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1E2D45";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(79,255,176,0.1)",
            border: "1px solid rgba(79,255,176,0.15)",
          }}
        >
          <Icon size={16} style={{ color: "#4FFFB0" }} />
        </div>
        <h3
          className="font-display font-semibold text-sm"
          style={{ color: "#E8F0FE" }}
        >
          {category.category}
        </h3>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, j) => (
          <span
            key={j}
            className="px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-150 cursor-default"
            style={{
              background: "rgba(79,255,176,0.05)",
              border: "1px solid rgba(79,255,176,0.12)",
              color: "#B0C0D4",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(79,255,176,0.12)";
              e.currentTarget.style.color = "#4FFFB0";
              e.currentTarget.style.borderColor = "rgba(79,255,176,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(79,255,176,0.05)";
              e.currentTarget.style.color = "#B0C0D4";
              e.currentTarget.style.borderColor = "rgba(79,255,176,0.12)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
