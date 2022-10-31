import React from "react";
import "../style.css";

export default function HealthMain(health) {
  return (
    <div>
      <h4 className="">{health.title}</h4>
      <div className="prog--det">
        <p>{health.description}</p>
        <img
          src={require(`../images/${health.img}`)}
          alt=""
          className="prog--img"
        />
      </div>
    </div>
  );
}
