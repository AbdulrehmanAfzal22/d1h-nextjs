"use client";
import { useState } from "react";
import Link from "next/link";
import "./amount.css";

export default function DonationHero() {
  const [selected, setSelected] = useState(100);
  const [customValue, setCustomValue] = useState("");

  const amounts = [10, 50, 100, 200];

  return (
    <section className="charity-hero">
      <img
        className="charity-bg"
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80"
        alt="Charity background"
      />
      <div className="charity-overlay" />

      <div className="charity-content">
        <span className="charity-label">MAKE DONATIONS</span>

        <h1 className="charity-title">
          Inspiring acts of kindness, our
          <br />
          charity journey
        </h1>

        <p className="charity-subtitle">
          Q Proin faucibus nec mauris a sodales, sed elementum mi tincidun.
        </p>

        <div className="donation-grid">
          {amounts.map((amt) => (
            <button
              key={amt}
              className={`donation-btn ${selected === amt ? "active" : ""}`}
              onClick={() => {
                setSelected(amt);
                setCustomValue("");
              }}
            >
              ${amt}
            </button>
          ))}

          <div className={`donation-btn custom-box ${selected === "custom" ? "active" : ""}`}>
            {selected === "custom" ? (
              <input
                className="custom-field"
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

        <Link href="/page/form">
          <button className="primary-donate-btn">
            DONATE NOW
          </button>
        </Link>

      </div>
    </section>
  );
}