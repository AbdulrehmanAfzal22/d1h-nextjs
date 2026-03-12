"use client";
import React, { useState } from 'react';

/* ── Inline SVG icons — zero dependencies ── */
const BankIcon = ({ size = 16, color = "#f5a623" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

const CopyIcon = ({ size = 15, color = "#888" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = ({ size = 20, color = "#2e7d5e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Info = ({ onClose }) => {
  const [showToast, setShowToast] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredCopy, setHoveredCopy] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "24px 20px 16px",
      fontFamily: "'Poppins', sans-serif",
      boxSizing: "border-box",
    }}>

      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14, right: 14,
            background: "#f0f0f0",
            border: "none",
            borderRadius: "50%",
            width: 32, height: 32,
            fontSize: 20,
            cursor: "pointer",
            color: "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            zIndex: 10,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#f5a623"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.color = "#555"; }}
        >×</button>
      )}

      {/* Title */}
      <h1 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b4b", margin: "0 0 8px 0", paddingRight: 32 }}>
        Make a Difference Today
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, margin: "0 0 20px 0", fontWeight: 400 }}>
        Every contribution, big or small, brings hope to those in need.<br />
        Your generosity can transform lives.
      </p>

      {/* Bank header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
        <BankIcon size={20} color="#f5a623" />
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0d1b4b", margin: 0 }}>Bank Account Details</h2>
      </div>

      {/* Cards row */}
      <div style={{ display: "flex", gap: 12, width: "100%", marginBottom: 14, boxSizing: "border-box" }}>

        {/* Meezan Bank */}
        <div
          style={{
            background: "#fff", borderRadius: 12, flex: "1 1 0", minWidth: 0, padding: 14,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)", textAlign: "left",
            transform: hoveredCard === "meezan" ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={() => setHoveredCard("meezan")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
            <BankIcon size={16} color="#f5a623" />
            <span>Meezan Bank</span>
          </div>
          <p style={{ fontSize: 11, color: "#888", margin: "0 0 3px 0" }}>Account Holder</p>
          <p style={{ fontSize: 12, color: "#111", margin: "0 0 8px 0", fontWeight: 500 }}>Muhammad Fuad Mufti</p>
          <p style={{ fontSize: 11, color: "#888", margin: "0 0 3px 0" }}>IBAN Number</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: "#222", margin: 0, wordBreak: "break-all" }}>
              PK68MEZN0002360103881902
            </p>
            <span
              style={{ flexShrink: 0, marginLeft: 6, cursor: "pointer" }}
              onClick={() => copyToClipboard("PK68MEZN0002360103881902")}
              title="Copy IBAN"
              onMouseEnter={() => setHoveredCopy("meezan")}
              onMouseLeave={() => setHoveredCopy(null)}
            >
              <CopyIcon size={15} color={hoveredCopy === "meezan" ? "#f5a623" : "#888"} />
            </span>
          </div>
        </div>

        {/* MCB Bank */}
        <div
          style={{
            background: "#fff", borderRadius: 12, flex: "1 1 0", minWidth: 0, padding: 14,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)", textAlign: "left",
            transform: hoveredCard === "mcb" ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={() => setHoveredCard("mcb")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
            <BankIcon size={16} color="#f5a623" />
            <span>MCB Bank</span>
          </div>
          <p style={{ fontSize: 11, color: "#888", margin: "0 0 3px 0" }}>Account Holder</p>
          <p style={{ fontSize: 12, color: "#111", margin: "0 0 8px 0", fontWeight: 500 }}>Muhammad Fuad Mufti</p>
          <p style={{ fontSize: 11, color: "#888", margin: "0 0 3px 0" }}>IBAN Number</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: "#222", margin: 0, wordBreak: "break-all" }}>
              PK13MUCB1606024001010677
            </p>
            <span
              style={{ flexShrink: 0, marginLeft: 6, cursor: "pointer" }}
              onClick={() => copyToClipboard("PK13MUCB1606024001010677")}
              title="Copy IBAN"
              onMouseEnter={() => setHoveredCopy("mcb")}
              onMouseLeave={() => setHoveredCopy(null)}
            >
              <CopyIcon size={15} color={hoveredCopy === "mcb" ? "#f5a623" : "#888"} />
            </span>
          </div>
        </div>

      </div>

      {/* Note */}
      <p style={{ fontSize: 11, color: "#888", margin: "0 0 16px 0", textAlign: "center" }}>
        Please share your payment confirmation with us for acknowledgment
      </p>

      {/* Toast */}
      {showToast && (
        <div style={{
          position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)",
          background: "#fff", padding: "12px 22px", borderRadius: 12,
          display: "flex", alignItems: "center", gap: 10,
          fontSize: 14, boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          zIndex: 9999999, whiteSpace: "nowrap",
        }}>
          <CheckIcon size={20} color="#2e7d5e" />
          IBAN copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Info;