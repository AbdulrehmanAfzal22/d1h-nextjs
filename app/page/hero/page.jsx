"use client";
import "./hero.css";
import { Sun, Sprout, Dog, Globe } from "lucide-react";

function HeroSection() {



  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>
            Building bridges: together <br />
            we create impact!
          </h1>

          <div className="hero-buttons">
            <button className="donate-btn">DONATE NOW</button>
            <button className="explore-btn">EXPLORE MORE</button>
          </div>
        </div>
      </div>

   
    </>
  );
}

export default HeroSection;