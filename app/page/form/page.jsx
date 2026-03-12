"use client";
import React from "react";
import "./form.css";
import { useRouter } from "next/navigation";

function InviteForm() {
  const router = useRouter();

  return (
    <section className="invite-section">
      <div className="invite-container">

        <button className="back-btn" onClick={() => router.back()}>
          ← Back
        </button>

        <h2>Become a Volunteer</h2>
        <p>Join us and help make a difference in people's lives.</p>

        <form className="invite-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Why do you want to join?" rows="4"></textarea>
          </div>

          <button type="submit" className="invite-btn">
            Join Now
          </button>
        </form>

      </div>
    </section>
  );
}

export default InviteForm;