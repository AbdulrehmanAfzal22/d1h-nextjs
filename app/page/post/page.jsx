"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./post.css";

const CARD_WIDTH = 380;

const posts = [
  {
    tag: "CHARITY",
    comments: 0,
    title: "Be part our mission to change lives",
    date: "May 8, 2024",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    tag: "IMPACT",
    comments: 0,
    title: "Building bridges to the better lives",
    date: "May 8, 2024",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    tag: "DONATION",
    comments: 0,
    title: "Lighting the way to a better tomorrow",
    date: "May 8, 2024",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
  },
  {
    tag: "WELFARE",
    comments: 2,
    title: "Empowering communities through education",
    date: "May 10, 2024",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  },
  {
    tag: "COMMUNITY",
    comments: 1,
    title: "Together we can change the world",
    date: "May 12, 2024",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
  },
];

export default function LatestPosts() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (newIndex) => {
    const clamped = Math.max(0, Math.min(newIndex, posts.length - 1));
    setIndex(clamped);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
    }
  };

  return (
    <section className="lp-section">
      {/* ── Left Panel ── */}
      <div className="lp-left">
        <span className="lp-label">IMPACT STORIES</span>
        <h2 className="lp-heading">Latest posts</h2>
        <p className="lp-desc">
          Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod
          tempor incididunt nostrud exercitation ullamco.
        </p>
        <div className="lp-arrows">
          <button
            className={`lp-arrow-btn${index === 0 ? " disabled" : ""}`}
            onClick={() => scrollTo(index - 1)}
            aria-label="Previous"
          >
            <ArrowLeft size={18} strokeWidth={2} />
          </button>
          <button
            className={`lp-arrow-btn${index === posts.length - 1 ? " disabled" : ""}`}
            onClick={() => scrollTo(index + 1)}
            aria-label="Next"
          >
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* ── Scrollable Cards ── */}
      <div className="lp-track-wrap">
        <div className="lp-track" ref={trackRef}>
          {posts.map((post, i) => (
            <a href="#" className="lp-card" key={i}>
              <div className="lp-img-wrap">
                <img src={post.img} alt={post.title} className="lp-img" />
                <div className="lp-overlay">
                  <div className="lp-arrow-circle">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div className="lp-content">
                <div className="lp-meta">
                  <span className="lp-tag">{post.tag}</span>
                  <span className="lp-dot">•</span>
                  <span className="lp-comments">{post.comments} comments</span>
                </div>
                <h3 className="lp-title">{post.title}</h3>
                <p className="lp-date">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}