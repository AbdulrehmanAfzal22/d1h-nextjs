"use client";
import { Cloud, Bird, PawPrint, Leaf } from "lucide-react";
import "./involved.css";

const cards = [
  { icon: Cloud,    title: "Testament to our humanity" },
  { icon: Bird,     title: "A small acts of kindness" },
  { icon: PawPrint, title: "Power to make difference" },
  { icon: Leaf,     title: "Gestures or lofty donations" },
];

export default function GetInvolved() {
  return (
    <section className="gi-section">
      {/* Header */}
      <h2 className="gi-title">Get Involved</h2>
      <p className="gi-subtitle">
        Explore narratives illustrating the positive impact contributions social
        responsibility and collaboration.
      </p>

      {/* Cards */}
      <div className="gi-grid">
        {cards.map(({ icon: Icon, title }, i) => (
          <div className="gi-card" key={i}>
            <div className="gi-icon-wrap">
              <Icon className="gi-icon" strokeWidth={1.5} size={48} />
            </div>
            <p className="gi-card-title">{title}</p>
            <div className="gi-arrow">↑</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="gi-footer">
        Are you interested in working with us?{" "}
        <a href="#" className="gi-link">Let's started now</a>
      </p>
    </section>
  );
}