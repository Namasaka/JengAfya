import React from "react";

export default function TestimonialsMain() {
  return (
    <div className="testimonials--wrap">
      <div className="testimonials--text">
        <h3 className="testimonials--header">TESTIMONIALS</h3>
        <p className="testimonials--text1">WHAT THEY SAY ABOUT US</p>
        <p className="testimonials--text2">
          I made the right choice and by choosing the right plan and program, i
          already achieved my ideal body!
        </p>
        <p>Mathew hendrickson-</p>
        <p>Entrepreneur</p>
      </div>
      <img
        src={require(`../images/testimonials.png`)}
        alt=""
        className="testimonials--img"
      />
    </div>
  );
}
