"use client"
import React, { useState } from "react";
import "./section.css";
const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    alt: "Children smiling",
    icon: "🕊️",
    title: "Promoting diversity and inclusion",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
    alt: "Hands together",
    icon: "☀️",
    title: "Future of charitable giving",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    alt: "Community",
    icon: "👥",
    title: "Understanding donor behavior",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1547452000-f2b94f1e6f60?w=600&q=80",
    alt: "Education",
    icon: "📚",
    title: "Empowering education for all",
  },
];

const CARD_WIDTH = 296; // 280px card + 16px gap

export default function ImpactStories() {
  const [current, setCurrent] = useState(0);
  const maxIndex = cards.length - 2;

  const handleNext = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <>
    <div className="is-section">
      {/* Left Panel */}
      <div className="is-left">
        <p className="is-label">Impact Stories</p>
        <h1 className="is-title">Our Vision</h1>
        <p className="is-desc">
          Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor
          incididunt nostrud exercitation ullamco.
        </p>
        <div className="is-nav-btns">
          <button className="is-nav-btn" onClick={handlePrev}>
            &#8592;
          </button>
          <button className="is-nav-btn" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="is-slider-wrapper">
        <div
          className="is-slider-track"
          style={{ transform: `translateX(-${current * CARD_WIDTH}px)` }}
        >
          {cards.map((card, index) => (
            <div
              className="is-card"
              key={card.id}
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <img src={card.img} alt={card.alt} />
              <div className="is-card-overlay" />
              <div className="is-card-content">
                <span className="is-card-icon">{card.icon}</span>
                <div className="is-card-title">{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="ts-wrapper">
      <p className="ts-text">
        We're{" "}
        <span className="ts-avatar-inline">
          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80" alt="person 1" />
        </span>{" "}
        changing the way architecture{" "}
        <span className="ts-avatar-inline">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" alt="person 2" />
        </span>{" "}
        is build for clients{" "}
        <span className="ts-avatar-inline">
          <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=80&q=80" alt="person 3" />
        </span>{" "}
        by the utilizing virtual reality{" "}
        <span className="ts-avatar-inline">
          <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=80&q=80" alt="person 4" />
        </span>{" "}
        to provide immersive previews.
      </p>

      <div className="ts-author">
        <p className="ts-author-name">Grace Anderson</p>
        <p className="ts-author-location">London</p>
      </div>
    </div>
    
    </>
  

  );
}