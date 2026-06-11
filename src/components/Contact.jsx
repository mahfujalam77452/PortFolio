import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { personal } from "../data/portfolio";
import { SectionLabel } from "./About";
import { useInView } from "../hooks/useInView";

import  codeforcesIcon from "../assets/CP/codeforce.png";

function GithubIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
function LinkedinIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: GithubIcon, label: "GitHub", href: personal.github, color: "#E8F0FE" },
    { icon: LinkedinIcon, label: "LinkedIn", href: personal.linkedin, color: "#1B98F5" },
    { icon: () => <img src={codeforcesIcon} alt="Codeforces" className="w-4 h-4" />, label: "Codeforces", href: personal.codeforces, color: "#1B98F5" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter" data-visible={inView}>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "#E8F0FE", letterSpacing: "-1px" }}
          >
            Let's Work Together
          </h2>
          <p className="text-base mb-12 max-w-lg" style={{ color: "#8899AA" }}>
            Open to internships, full-time roles, freelance projects, and hackathon
            collaborations. Reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact details */}
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(13, 21, 38, 0.9)",
                    border: "1px solid #1E2D45",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(79,255,176,0.1)",
                      border: "1px solid rgba(79,255,176,0.15)",
                    }}
                  >
                    <Icon size={16} style={{ color: "#4FFFB0" }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono" style={{ color: "#8899AA" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold transition-colors"
                        style={{ color: "#E8F0FE" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4FFFB0";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#E8F0FE";
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: "#E8F0FE" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(13, 21, 38, 0.9)",
                  border: "1px solid #1E2D45",
                }}
              >
                <p className="text-xs font-mono mb-3" style={{ color: "#8899AA" }}>
                  Social & Profiles
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: "rgba(79,255,176,0.06)",
                        border: "1px solid rgba(79,255,176,0.12)",
                        color: "#8899AA",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#4FFFB0";
                        e.currentTarget.style.borderColor = "rgba(79,255,176,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#8899AA";
                        e.currentTarget.style.borderColor = "rgba(79,255,176,0.12)";
                      }}
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div
              className="p-8 rounded-2xl flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, rgba(19, 30, 51, 0.9), rgba(13, 21, 38, 0.95))",
                border: "1px solid rgba(79,255,176,0.15)",
                boxShadow: "0 0 40px rgba(79,255,176,0.04)",
              }}
            >
              <div>
                <div
                  className="text-4xl font-display font-extrabold mb-2"
                  style={{ color: "#4FFFB0", letterSpacing: "-1px" }}
                >
                  Available
                </div>
                <div className="font-display font-semibold text-xl mb-4" style={{ color: "#E8F0FE" }}>
                  for new opportunities
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#8899AA" }}>
                  Whether it's a startup, open-source project, or research collaboration — I'm
                  always interested in meaningful work. Let's build something great.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="block w-full py-3.5 rounded-xl text-center font-display font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: "#4FFFB0",
                    color: "#050A14",
                    boxShadow: "0 0 24px rgba(79,255,176,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(79,255,176,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(79,255,176,0.25)";
                  }}
                >
                  Send an Email
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-3.5 rounded-xl text-center font-display font-semibold text-sm transition-all duration-200 hover:scale-[1.02] border"
                  style={{
                    borderColor: "rgba(79,255,176,0.25)",
                    color: "#E8F0FE",
                    background: "rgba(79,255,176,0.05)",
                  }}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
