"use client";
import "./grow.css";

const team = [
  {
    name: "Stella Collins",
    role: "Legal Assistant",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Gabriel Turner",
    role: "Data Scientist",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Daniel Foster",
    role: "Event Coordinator",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    name: "Olivia Grace",
    role: "Community Manager",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
];

const socials = [
  { label: "f",  href: "#" },
  { label: "𝕏",  href: "#" },
  { label: "IG", href: "#" },
  { label: "in", href: "#" },
];

const marqueeWords = ["HEALING", "YOUTH FESTIVAL", "COMPLETE", "HEALING", "YOUTH FESTIVAL", "COMPLETE"];

export default function TeamSection() {
  return (
    <div className="ts-wrapper">
      {/* ── Top Bar ── */}
      <div className="ts-topbar">
        <h2 className="ts-heading">Let's grow hope together</h2>
        <a href="#" className="ts-cta">GET STARTED NOW</a>
      </div>

      {/* ── Cards Grid ── */}
      <div className="ts-grid">
        {team.map((member, i) => (
          <div className="ts-card" key={i}>
            <img src={member.img} alt={member.name} className="ts-img" />

            {/* Orange overlay — shows on hover */}
            <div className="ts-overlay">
              <div className="ts-socials">
                {socials.map((s, j) => (
                  <a key={j} href={s.href} className="ts-social-btn">{s.label}</a>
                ))}
              </div>
            </div>

            {/* Info always visible at bottom */}
            <div className="ts-info">
              <p className="ts-name">{member.name}</p>
              <p className="ts-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Marquee Banner ── */}
      <div className="ts-marquee-bar">
        <div className="ts-marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="ts-marquee-word">{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
}