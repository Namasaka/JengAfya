import React from "react";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className="home--items">
      <div className="home--text">
        <p className="top--text">
          The <span className="white">place</span> to{" "}
          <span className="white">get</span> your{" "}
          <span className="white">ideal </span>body{" "}
          <span className="white">Shape</span>
        </p>
        <p className="bottom--text">
          The <span className="white">best </span>fitness{" "}
          <span className="white">club</span> in{" "}
          <span className="white">town,</span> we{" "}
          <span className="white">help</span> you{" "}
          <span className="white">get</span> your{" "}
          <span className="white">dream </span>body
        </p>
        <div className="buttons">
          <NavLink to="/signup">
            <button className="button1">Get Started</button>
          </NavLink>
          <NavLink to="/whyus">
            <button className="button1">Learn More...</button>
          </NavLink>
        </div>
      </div>
      <img
        src={require(`../images/fitness.png`)}
        alt="img"
        className="home--img"
      />
    </div>
  );
}
