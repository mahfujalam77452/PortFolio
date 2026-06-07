import { useRef } from "react";
import { MapPin, GraduationCap, Users, Globe } from "lucide-react";
import { personal, education, organizations } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div
        ref={ref}
        className="section-enter"
        style={{ transition: "opacity 0.7s ease, transform 0.7s ease" }}
        data-visible={inView}
      >
        <SectionLabel>About Me</SectionLabel>
        <h2
          className="font-display font-bold text-4xl md:text-5xl mb-12"
          style={{ color: "#E8F0FE", letterSpacing: "-1px" }}
        >
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: "#B0C0D4" }}>
              I'm a{" "}
              <span style={{ color: "#4FFFB0" }} className="font-semibold">
                Competitive Programmer & MERN Stack Developer
              </span>{" "}
              recently completed B.Sc. CSE at SUST, Bangladesh. I thrive at the
              intersection of algorithmic problem-solving and full-stack engineering.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#B0C0D4" }}>
              With over{" "}
              <span className="font-semibold" style={{ color: "#E8F0FE" }}>
                1000+ competitive programming problems
              </span>{" "}
              solved and multiple live production applications, I bring both depth
              and versatility. I love building AI-powered products that solve
              real-world problems.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#B0C0D4" }}>
              When not coding, I'm mentoring peers, contributing to community
              organizations, or exploring the latest in AI research and LLM
              tooling.
            </p>

            {/* Quick info */}
            <div
              className="mt-6 p-5 rounded-xl space-y-3"
              style={{
                background: "rgba(13, 21, 38, 0.8)",
                border: "1px solid #1E2D45",
              }}
            >
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: personal.location,
                },
                {
                  icon: Globe,
                  label: "Languages",
                  value: "Bengali (Native) · English (Professional)",
                },
                {
                  icon: GraduationCap,
                  label: "University",
                  value: "SUST — B.Sc. CSE (CGPA 3.44)",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={15} style={{ color: "#4FFFB0", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span className="text-xs font-mono" style={{ color: "#8899AA" }}>
                      {label}
                    </span>
                    <p className="text-sm font-body" style={{ color: "#E8F0FE" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education + Organizations */}
          <div className="space-y-6">
            {/* Education */}
            <div>
              <h3
                className="font-display font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#8899AA" }}
              >
                Education
              </h3>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl"
                  style={{
                    background: "rgba(13, 21, 38, 0.8)",
                    border: "1px solid #1E2D45",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.05)", padding: "6px" }}
                      />
                    ) : (
                      // [IMAGE PLACEHOLDER] University logo will appear when you add logo URL
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(79,255,176,0.1)", border: "1px solid rgba(79,255,176,0.2)" }}
                      >
                        <GraduationCap size={20} style={{ color: "#4FFFB0" }} />
                      </div>
                    )}
                    <div>
                      <h4
                        className="font-display font-semibold text-base"
                        style={{ color: "#E8F0FE" }}
                      >
                        {edu.institution}
                      </h4>
                      <p className="text-sm mt-0.5" style={{ color: "#8899AA" }}>
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ background: "rgba(79,255,176,0.1)", color: "#4FFFB0" }}
                        >
                          {edu.duration}
                        </span>
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ background: "rgba(27,152,245,0.1)", color: "#1B98F5" }}
                        >
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Organizations */}
            <div>
              <h3
                className="font-display font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#8899AA" }}
              >
                Organizations
              </h3>
              <div className="space-y-3">
                {organizations.map((org, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(13, 21, 38, 0.8)",
                      border: "1px solid #1E2D45",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(79,255,176,0.1)", border: "1px solid rgba(79,255,176,0.15)" }}
                    >
                      <Users size={14} style={{ color: "#4FFFB0" }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#E8F0FE" }}>
                        {org.name}
                      </p>
                      <p className="text-xs" style={{ color: "#8899AA" }}>
                        {org.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="w-8 h-0.5 rounded-full"
        style={{ background: "#4FFFB0" }}
      />
      <span
        className="font-mono text-xs uppercase tracking-widest"
        style={{ color: "#4FFFB0" }}
      >
        {children}
      </span>
    </div>
  );
}
