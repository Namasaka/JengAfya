import React from "react";
import "../style.css";

export default function FatMain(fat) {
  return (
    <div>
      <h4 className="">{fat.title}</h4>
      <div className="prog--det">
        <p>{fat.description}</p>
        <img
          src={require(`../images/${fat.img}`)}
          alt=""
          className="prog--img"
        />
      </div>
    </div>
  );
}
