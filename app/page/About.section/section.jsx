"use client";
import React, { useState } from "react";
import { Feather, Heart, Users } from "lucide-react";
import "./section.css";
import img1 from "../../../public/assets/d1h-1.webp";
import img2 from "../../../public/assets/d1h-2.jpg";
import img3 from "../../../public/assets/d1h-3.jpg";
import img4 from "../../../public/assets/d1h-4.avif";

const CARD_WIDTH = 340;
const GAP = 18;

const cards = [
  {
    id: 1,
    img: img1,
    icon: <Feather size={28} strokeWidth={1.5} />,
    title: "Promoting diversity and inclusion",
  },
  {
    id: 2,
    img: img2,
    icon: <Feather size={28} strokeWidth={1.5} />,
    title: "Promoting diversity and inclusion",
  },
  {
    id: 3,
    img: img3,
    icon: <Heart size={28} strokeWidth={1.5} />,
    title: "Future of charitable giving",
  },
  {
    id: 4,
    img: img4,
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Understanding donors and behavior",
  },
];

export default function VisionStories() {
  const [current, setCurrent] = useState(0);

  const handleNext = () =>
    setCurrent((p) => (p < cards.length - 1 ? p + 1 : 0));
  const handlePrev = () =>
    setCurrent((p) => (p > 0 ? p - 1 : cards.length - 1));

  const getImgSrc = (img) =>
    typeof img === "string" ? img : img?.src ?? img;

  return (
    <>
      <div className="vision-section">
        {/* ── Left Panel ── */}
        <div className="vision-left">
          <p className="vision-label">Impact Stories</p>
          <h1 className="vision-title">Our Vision</h1>
          <p className="vision-desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod
            tempor incididunt nostrud exercitation ullamco.
          </p>
          <div className="vision-nav">
            <button className="vision-btn" onClick={handlePrev} aria-label="Previous">
              ←
            </button>
            <button className="vision-btn vision-btn--active" onClick={handleNext} aria-label="Next">
              →
            </button>
          </div>
        </div>

        {/* ── Slider ── */}
        <div className="vision-slider">
          <div
            className="vision-track"
            style={{
              transform: `translateX(-${current * (CARD_WIDTH + GAP)}px)`,
            }}
          >
            {cards.map((card) => (
              <div className="vision-card" key={card.id}>
                {/* Full image fills the card */}
                <div className="vision-card__img-wrap">
                  <img
                    src={getImgSrc(card.img)}
                    alt={card.title}
                    className="vision-card__img"
                  />
                </div>

                {/* Overlay */}
                <div className="vision-overlay" />

                {/* Content */}
                <div className="vision-content">
                  <span className="vision-icon">{card.icon}</span>
                  <div className="vision-card-title">{card.title}</div>
                  <a href="#" className="vision-view-more">
                    VIEW MORE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quote Section ── */}
      <div className="quote-section">
        <p className="quote-text">
          We&apos;re{" "}
          <span className="quote-avatar">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80"
              alt="Grace Anderson"
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