"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";
import Image from "next/image";
import logo from "../../../public/assets/donate.png";

const navLinks = [
  { label: "Vision", href: "#", active: true },
  { label: "Donate", href: "#" },
  { label: "Skill", href: "#" },
  { label: "Members", href: "#" },
  { label: "About", href: "#" },
  { label: "Post", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">

        {/* ── Logo ── */}
        <a href="#" className="nav-logo">
          <Image src={logo} alt="Logo" className="nav-logo-img" />
        </a>

        {/* ── Center Nav Links ── */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${link.active ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right Side ── */}
        <div className="nav-right">
          {/* CTA */}
          <a href="#" className="nav-cta">Join us</a>

          {/* Hamburger (mobile) */}
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>
    </header>
  );
}