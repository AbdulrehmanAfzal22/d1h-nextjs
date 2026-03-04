"use client";
import { useEffect, useState } from "react";
import "./skill.css";
import img1 from "../../../public/assets/d1h-5.png";

function CircleProgress({ percent, label, animate }) {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animate ? percent / 100 : 0) * circ;

  return (
    <div className="circle-item">
      <svg className="circle-svg" width="100" height="100" viewBox="0 0 100 100">
        <circle className="circle-bg" cx="50" cy="50" r={r} />
        <circle
          className="circle-fg"
          cx="50"
          cy="50"
          r={r}
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
        <text
          className="circle-text"
          x="50"
          y="50"
          transform="rotate(90, 50, 50)"
        >
          {percent}%
        </text>
      </svg>
      <span>{label}</span>
    </div>
  );
}

export default function PopularSkills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills-section">

      {/* ── Left ── */}
      <div className="skills-left">
        <p className="skills-label">Popular Skills</p>
        <h2 className="skills-title">
          Creating<br />possibilities by<br />changing life
        </h2>
        <p className="skills-desc">
          Adipiscing elit, sed do eiusmod tempor incididunt labore
          dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className="circles-row">
          <CircleProgress percent={43} label="Provide Hope"  animate={animate} />
          <CircleProgress percent={93} label="Support Lives" animate={animate} />
        </div>
      </div>

      {/* ── Right ── */}
      <div className="skills-right">
        <div className="blob-bg" />
        <div className="image-blob">

          {/* ✅ FIX: img1.src  —  Next.js imports give an object, .src gets the URL */}
          <img
            src={img1.src}
            alt="People hugging"
            className="skills-img"
          />

        </div>
      </div>

    </section>
  );
}