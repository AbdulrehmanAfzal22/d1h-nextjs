"use client"
import { useState } from "react";
import "./amount.css";
export default function DonationHero() {
  const [selected, setSelected] = useState(100);
  const [customValue, setCustomValue] = useState("");

  const amounts = [10, 50, 100, 200];

  return (
    <section className="donation-hero">
      {/* Background Image — replace src with your own image */}
      <img
        className="hero-bg"
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80"
        alt="Charity background"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-label">MAKE DONATIONS</span>

        <h1 className="hero-title">
          Inspiring acts of kindness, our<br />charity journey
        </h1>

        <p className="hero-subtitle">
          Q Proin faucibus nec mauris a sodales, sed elementum mi tincidun.
        </p>

        <div className="amount-grid">
          {amounts.map((amt) => (
            <button
              key={amt}
              className={`amount-btn ${selected === amt ? "active" : ""}`}
              onClick={() => {
                setSelected(amt);
                setCustomValue("");
              }}
            >
              ${amt}
            </button>
          ))}

          <div className={`amount-btn custom-wrap ${selected === "custom" ? "active" : ""}`}>
            {selected === "custom" ? (
              <input
                className="custom-input"
                type="number"
                placeholder="Enter amount"
                value={customValue}
                autoFocus
                onChange={(e) => setCustomValue(e.target.value)}
              />
            ) : (
              <span onClick={() => setSelected("custom")}>Custom</span>
            )}
          </div>
        </div>

        <button className="donate-btn">DONATE NOW</button>
      </div>
    </section>
  );
}