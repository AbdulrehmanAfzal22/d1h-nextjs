"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./post.css";

const posts = [
  {
    tag: "DONATION",
    comments: 0,
    title: "Lighting the way to a better tomorrow",
    date: "May 8, 2024",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    tag: "WELFARE",
    comments: 0,
    title: "Join the movement of love and hope",
    date: "May 8, 2024",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  },
  {
    tag: "CHARITY",
    comments: 3,
    title: "Together we can change the world",
    date: "May 10, 2024",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
  },
  {
    tag: "COMMUNITY",
    comments: 5,
    title: "Building bridges across communities",
    date: "May 12, 2024",
    img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
  },
  {
    tag: "HOPE",
    comments: 2,
    title: "Every small act of kindness matters",
    date: "May 14, 2024",
    img: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
  },
];

const CARDS_PER_PAGE = 2;

export default function LatestPosts() {
  const [current, setCurrent] = useState(0);
  const total = posts.length;

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  const visible = [
    posts[current % total],
    posts[(current + 1) % total],
  ];

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
          <button className="lp-arrow-btn" onClick={prev} aria-label="Previous">
            <ArrowLeft size={20} strokeWidth={2} />
          </button>
          <button className="lp-arrow-btn" onClick={next} aria-label="Next">
            <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* ── Right Cards ── */}
      <div className="lp-cards">
        {visible.map((post, i) => (
          <div className="lp-card" key={i}>
            {/* Image */}
            <div className="lp-img-wrap">
              <img src={post.img} alt={post.title} className="lp-img" />
              {/* Orange overlay on hover */}
              <div className="lp-overlay">
                <div className="lp-arrow-circle">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lp-content">
              <div className="lp-meta">
                <span className="lp-tag">{post.tag}</span>
                <span className="lp-dot">•</span>
                <span className="lp-comments">{post.comments} comments</span>
              </div>
              <h3 className="lp-title">{post.title}</h3>
              <p className="lp-date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}