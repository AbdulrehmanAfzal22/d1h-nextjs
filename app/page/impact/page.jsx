"use client";
import "./impact.css";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Your support brings hope to those in need",
    date: "May 24, 2026",
    location: "Hyde Park",
    time: "Starts 8:00 am",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    title: "Improve lives and strengthen the hope",
    date: "May 24, 2026",
    location: "Hyde Park",
    time: "Starts 8:00 am",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  },
  {
    title: "Making a positive impact every day",
    date: "May 24, 2026",
    location: "Hyde Park",
    time: "Starts 8:00 am",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
  },
  {
    title: "Join us in making a brighter future",
    date: "May 24, 2026",
    location: "Hyde Park",
    time: "Starts 8:00 am",
    img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
  },
];

export default function Impact() {
  return (
    <section className="is-section">

      {/* ── Top Bar ── */}
      <div className="is-topbar">
        <h2 className="is-heading">
          Kindness matters, building a<br />brighter future
        </h2>
        <a href="#" className="is-btn">MORE ABOUT US</a>
      </div>

      {/* ── Cards Grid ── */}
      <div className="is-grid">
        {stories.map((story, i) => (
          <div className="is-card" key={i}>

            {/* Image on top */}
            <div className="is-img-wrap">
              <img src={story.img} alt={story.title} className="is-img" />
              {/* Arrow circle appears on hover */}
              <div className="is-arrow-circle">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </div>

            {/* Content below image */}
            <div className="is-content">
              <div className="is-meta">
                <span className="is-meta-item">
                  <MapPin size={13} className="is-icon" />
                  {story.location}
                </span>
                <span className="is-dot">•</span>
                <span className="is-meta-item">
                  <Clock size={13} className="is-icon" />
                  {story.time}
                </span>
              </div>
              <h3 className="is-title">{story.title}</h3>
              <p className="is-date">{story.date}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}