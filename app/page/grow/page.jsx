"use client";
import "./grow.css";

const teamMembers = [
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

const socialLinks = [
  { label: "f", href: "#" },
  { label: "𝕏", href: "#" },
  { label: "IG", href: "#" },
  { label: "in", href: "#" },
];

const scrollWords = [
  "HEALING",
  "YOUTH FESTIVAL",
  "COMPLETE",
  "HEALING",
  "YOUTH FESTIVAL",
  "COMPLETE",
];

export default function GrowHopeSection() {
  return (
    <div className="gh-section">

      {/* Header */}
      <div className="gh-header">
        <h2 className="gh-title">Let's grow hope together</h2>
        <a href="#" className="gh-button">GET STARTED NOW</a>
      </div>

      {/* Grid */}
      <div className="gh-grid">
        {teamMembers.map((member, index) => (
          <div className="gh-card" key={index}>
            <img
              src={member.img}
              alt={member.name}
              className="gh-image"
            />

            <div className="gh-overlay">
              <div className="gh-socials">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="gh-social-link"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="gh-info">
              <p className="gh-name">{member.name}</p>
              <p className="gh-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="gh-marquee">
        <div className="gh-track">
          {[...scrollWords, ...scrollWords].map((word, i) => (
            <span key={i} className="gh-word">
              {word}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}