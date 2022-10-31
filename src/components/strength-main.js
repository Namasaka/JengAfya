import React from "react";
import "../style.css";

export default function StrengthMain(strength) {
  return (
    <div>
      <h4 className="">{strength.title}</h4>
      <div className="prog--det">
        <p>{strength.description}</p>
        <img
          src={require(`../images/${strength.img}`)}
          alt=""
          className="prog--img"
        />
      </div>
    </div>
  );
}
