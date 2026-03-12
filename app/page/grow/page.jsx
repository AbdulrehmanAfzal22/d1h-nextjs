"use client";
import "./grow.css";

const teamMembers = [
  {
    // name: "Ali Hassan",
    // role: "Legal Assistant",
    img: "/assets/d1h-11.webp"
  },
  {
    // name: "Sara Ahmed",
    // role: "Data Scientist",
    img: "/assets/d1h-12.jpg"
  },
  {
    // name: "Umar Farooq",
    // role: "Event Coordinator",
    img: "/assets/d1h-13.jpg"
  },
  {
    // name: "Ayesha Khan",
    // role: "Community Manager",
    img: "/assets/d1h-14.webp"
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
      <div className="gh-header">
        <h2 className="gh-title">Let's grow hope together</h2>
        <a href="#" className="gh-button">GET STARTED NOW</a>
      </div>

      <div className="gh-grid">
        {teamMembers.map((member, index) => (
          <div className="gh-card" key={index}>
            <img src={member.img} alt={member.name} className="gh-image" />

            <div className="gh-overlay">
              <div className="gh-socials">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className="gh-social-link">
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