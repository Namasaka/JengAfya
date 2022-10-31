import React from "react";
import image from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={image} alt="logo" className="logo" />
      <div className="elements">
        <NavLink to="/" className="black">
          Home
        </NavLink>
        <NavLink to="/programs" className="white">
          Programs
        </NavLink>
        <NavLink to="/whyus" className="black">
          Why Us
        </NavLink>
        <NavLink to="/testimonials" className="white">
          Testimonials
        </NavLink>
        <NavLink to="/trainers" className="black">
          Trainers
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
