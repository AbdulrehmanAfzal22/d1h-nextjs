"use client";
import "./savior.css";

const gridImgs = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80",
];

export default function Footer() {
  return (
    <footer className="ft-footer">

      {/* ── Top Navbar ── */}
      <nav className="ft-nav">
        <div className="ft-logo">
          <span className="ft-logo-icon">🦋</span>
          <span className="ft-logo-text">savior</span>
        </div>
        <ul className="ft-nav-links">
          <li><a href="#">Blog &amp; News</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </nav>

      <div className="ft-divider" />

      {/* ── Main Content ── */}
      <div className="ft-main">

        {/* Left — Tagline */}
        <div className="ft-left">
          <h2 className="ft-tagline">
            From heart to hand,<br />inspiring stories
          </h2>
        </div>

        {/* Middle — We Are Here */}
        <div className="ft-middle">
          <h4 className="ft-col-title">We Are Here</h4>
          <p className="ft-contact">Email: savior@sagetheme.com</p>
          <p className="ft-contact">Tel: +41 22 345 66 77</p>
          <p className="ft-address">Hyde Park, 221b Baker Street,<br />London NW1 6XE, UK</p>
          <a href="#" className="ft-directions">GET DIRECTIONS</a>
        </div>

        {/* Right — Get In Touch photo grid */}
        <div className="ft-right">
          <h4 className="ft-col-title">Get In Touch</h4>
          <div className="ft-photo-grid">
            {gridImgs.map((src, i) => (
              <div className="ft-photo-item" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">SageTheme © 2024. All Rights Reserved.</p>
        <div className="ft-socials">
          <a href="#" className="ft-social" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" className="ft-social" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="ft-social" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" className="ft-social" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}