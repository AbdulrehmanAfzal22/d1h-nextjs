"use client";
import React, { useEffect, useState } from "react";
import { Sun, Sprout, Dog, Globe } from "lucide-react";
import "./projects.css";
import Info from "../bank/page";

// ── Modal — NO portal, rendered inline so CSS always works ───────────────
function DonateModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "520px",
          width: "92%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.4)",
          position: "relative",
          animation: "modalSlideUp 0.3s ease",
        }}
      >
        <Info onClose={onClose} />
      </div>
    </div>
  );
}

// ── Main Projects Component ───────────────────────────────────────────────
function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const i1 = setInterval(() => {
      setCount1((p) => { if (p >= 8532) { clearInterval(i1); return 8532; } return p + 50; });
    }, 10);
    const i2 = setInterval(() => {
      setCount2((p) => { if (p >= 98.9) { clearInterval(i2); return 98.9; } return +(p + 1).toFixed(1); });
    }, 50);
    const i3 = setInterval(() => {
      setCount3((p) => { if (p >= 82) { clearInterval(i3); return 82; } return p + 1; });
    }, 30);
    const i4 = setInterval(() => {
      setCount4((p) => { if (p >= 452) { clearInterval(i4); return 452; } return p + 5; });
    }, 20);
    return () => {
      clearInterval(i1);
      clearInterval(i2);
      clearInterval(i3);
      clearInterval(i4);
    };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Building bridges: together <br />
            we create impact!
          </h1>
          <div className="hero-buttons">
            <button
              className="donate-btn"
              onClick={() => setShowModal(true)}
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* ── VIDEO + STATS ── */}
      <div className="projects-wrapper">
        <div className="above-section" />
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
        <div className="video-float">
          <video
            className="video-el"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay muted loop playsInline
          />
          <div className="play-overlay">
            <button className="play-btn" aria-label="Play video">
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── DONATE MODAL ── */}
      {showModal && <DonateModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Projects;