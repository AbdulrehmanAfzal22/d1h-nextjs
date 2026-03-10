"use client";
import React, { useEffect, useState } from "react";
import { Sun, Sprout, Dog, Globe } from "lucide-react";
import "./projects.css";

function Projects() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => { if (prev >= 8532) { clearInterval(interval1); return 8532; } return prev + 50; });
    }, 10);
    const interval2 = setInterval(() => {
      setCount2((prev) => { if (prev >= 98.9) { clearInterval(interval2); return 98.9; } return +(prev + 1).toFixed(1); });
    }, 50);
    const interval3 = setInterval(() => {
      setCount3((prev) => { if (prev >= 82) { clearInterval(interval3); return 82; } return prev + 1; });
    }, 30);
    const interval4 = setInterval(() => {
      setCount4((prev) => { if (prev >= 452) { clearInterval(interval4); return 452; } return prev + 5; });
    }, 20);
    return () => {
      clearInterval(interval1); clearInterval(interval2);
      clearInterval(interval3); clearInterval(interval4);
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>
            Building bridges: together <br />
            we create impact!
          </h1>
          <div className="hero-buttons">
            <button className="donate-btn">DONATE NOW</button>
            <button className="explore-btn">EXPLORE MORE</button>
          </div>
        </div>
      </div>

      <div className="projects-wrapper">

        {/* ── White space above (simulates previous section) ── */}
        <div className="above-section" />

        {/* ── Stats bar (black) — sits BEHIND the video ── */}
        <div className="stats-section">
          <div className="stat-box">
            <div className="icon"><Sun size={32} /></div>
            <h2>{count1.toLocaleString()}+</h2>
            <p>Projects Complete</p>
          </div>
          <div className="stat-box">
            <div className="icon"><Sprout size={32} /></div>
            <h2>{count2}%</h2>
            <p>Clients Satisfaction</p>
          </div>
          <div className="stat-box">
            <div className="icon"><Dog size={32} /></div>
            <h2>{count3}k</h2>
            <p>Professional Skills</p>
          </div>
          <div className="stat-box">
            <div className="icon"><Globe size={32} /></div>
            <h2>{count4}+</h2>
            <p>Awards Winning</p>
          </div>
        </div>

        {/* ── Video — absolutely positioned to overlap both sections ── */}
        <div className="video-float">
          <video
            className="video-el"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="play-overlay">
            <button className="play-btn" aria-label="Play video">
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Projects;