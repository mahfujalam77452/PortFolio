import { useRef } from "react";
import { Trophy, ExternalLink, Target } from "lucide-react";
import { competitiveProgramming, contestAchievements } from "../data/portfolio";
import { SectionLabel } from "./About";
import { useInView } from "../hooks/useInView";

export default function CompetitiveProgramming() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="cp"
      className="py-24 px-6"
      style={{ background: "rgba(13, 21, 38, 0.4)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter" data-visible={inView}>
          <SectionLabel>Competitive Programming</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "#E8F0FE", letterSpacing: "-1px" }}
          >
            Algorithm Arena
          </h2>
          <p className="text-base mb-12 max-w-lg" style={{ color: "#8899AA" }}>
            1200+ problems solved across platforms, pushing from data structures to graph theory.
          </p>

          {/* Platform cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {competitiveProgramming.map((platform, i) => (
              <PlatformCard key={i} platform={platform} delay={i * 80} />
            ))}
          </div>

          {/* Achievements */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(13, 21, 38, 0.9)",
              border: "1px solid #1E2D45",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={16} style={{ color: "#4FFFB0" }} />
              <h3
                className="font-display font-semibold text-sm"
                style={{ color: "#E8F0FE" }}
              >
                Contest Achievements
              </h3>
            </div>
            <div className="space-y-2">
              {contestAchievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Target
                    size={13}
                    style={{ color: "#4FFFB0", marginTop: 3, flexShrink: 0 }}
                  />
                  <p className="text-sm" style={{ color: "#B0C0D4" }}>
                    {ach}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ platform, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <a
      ref={ref}
      href={platform.url}
      target="_blank"
      rel="noreferrer"
      className="block p-5 rounded-2xl group section-enter hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      data-visible={inView}
      style={{
        background: "rgba(13, 21, 38, 0.9)",
        border: "1px solid #1E2D45",
        transitionDelay: `${delay}ms`,
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${platform.color}44`;
        e.currentTarget.style.boxShadow = `0 8px 32px ${platform.color}14`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1E2D45";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Platform logo or icon */}
      {platform.logo ? (
        <img
          src={platform.logo}
          alt={platform.platform}
          className="w-10 h-10 rounded-lg object-contain mb-4"
          style={{ background: "rgba(255,255,255,0.05)", padding: "6px" }}
        />
      ) : (
        // [IMAGE PLACEHOLDER] Platform logo will appear when you add logo URL
        <div
          className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center text-xs font-mono font-bold"
          style={{
            background: `${platform.color}18`,
            border: `1px solid ${platform.color}30`,
            color: platform.color,
          }}
        >
          {platform.platform.slice(0, 2).toUpperCase()}
        </div>
      )}

      <h3
        className="font-display font-bold text-sm mb-1"
        style={{ color: "#E8F0FE" }}
      >
        {platform.platform}
      </h3>
      <p className="text-xs mb-3" style={{ color: "#8899AA" }}>
        {platform.handle !== "—" ? `@${platform.handle}` : platform.rank}
      </p>

      {/* Rating display */}
      <div
        className="text-3xl font-display font-extrabold mb-1"
        style={{ color: platform.color, letterSpacing: "-1px" }}
      >
        {platform.rating}
      </div>
      <div className="text-xs font-mono mb-3" style={{ color: "#8899AA" }}>
        {platform.rank}
      </div>

      {/* Stats */}
      <div className="space-y-1">
        {platform.stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: platform.color, opacity: 0.7 }}
            />
            <span className="text-xs" style={{ color: "#8899AA" }}>
              {stat}
            </span>
          </div>
        ))}
      </div>

      <ExternalLink
        size={12}
        className="mt-3 opacity-0 group-hover:opacity-60 transition-opacity"
        style={{ color: platform.color }}
      />
    </a>
  );
}
