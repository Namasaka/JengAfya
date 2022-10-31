import React from "react";
import "../style.css";

export default function CardioMain(cardio) {
  return (
    <div>
      <h4 className="">{cardio.title}</h4>
      <div className="prog--det">
        <p>{cardio.description}</p>
        <img
          src={require(`../images/${cardio.img}`)}
          alt=""
          className="prog--img"
        />
      </div>
    </div>
  );
}
