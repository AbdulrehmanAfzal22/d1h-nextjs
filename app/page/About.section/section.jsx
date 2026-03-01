"use client";
import React, { useState } from "react";
import { Feather, Heart, Users } from "lucide-react";
import "./section.css";

const CARD_WIDTH = 338;

const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    icon: <Feather size={28} strokeWidth={1.5} />,
    title: "Promoting diversity and inclusion",
  },

    {
    id: 5,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    icon: <Feather size={28} strokeWidth={1.5} />,
    title: "Promoting diversity and inclusion",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    icon: <Heart size={28} strokeWidth={1.5} />,
    title: "Future of charitable giving",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Understanding donors and behavior",
  },
];

export default function VisionStories() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((p) => (p < cards.length - 1 ? p + 1 : 0));
  const handlePrev = () => setCurrent((p) => (p > 0 ? p - 1 : cards.length - 1));

  return (
    <>
      <div className="vision-section">
        <div className="vision-left">
          <p className="vision-label">Impact Stories</p>
          <h1 className="vision-title">Our Vision</h1>
          <p className="vision-desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor
            incididunt nostrud exercitation ullamco.
          </p>
          <div className="vision-nav">
            <button className="vision-btn" onClick={handlePrev}>←</button>
            <button className="vision-btn active" onClick={handleNext}>→</button>
          </div>
        </div>

        <div className="vision-slider">
          <div
            className="vision-track"
            style={{ transform: `translateX(-${current * CARD_WIDTH}px)` }}
          >
            {cards.map((card) => (
              <div className="vision-card" key={card.id}>
                <img src={card.img} alt={card.title} />
                <div className="vision-overlay" />
                <div className="vision-content">
                  <span className="vision-icon">{card.icon}</span>
                  <div className="vision-card-title">{card.title}</div>
                  {/* VIEW MORE — only visible on hover via CSS */}
                  <a href="#" className="vision-view-more">
                    VIEW MORE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quote-section">
        <p className="quote-text">
          We're{" "}
          <span className="quote-avatar">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80"
              alt="avatar"
            />
          </span>{" "}
          changing the way architecture is built using immersive previews.
        </p>
        <div className="quote-author">
          <p className="quote-name">Grace Anderson</p>
          <p className="quote-location">London</p>
        </div>
      </div>
    </>
  );
}