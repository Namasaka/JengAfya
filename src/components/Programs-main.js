import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

export default function ProgramMain(props) {
  return (
    <NavLink to={`/programs/${props.title}`} className="prog--cards">
      <div className="program--cont">
        <img
          src={require(`../images/${props.img}`)}
          alt=""
          className="program--icons"
        />
        <h3 className="program--header">{props.title}</h3>
        <p className="program--text">{props.text}</p>
        <img src={require(`../images/arrow.png`)} alt="" className="arrow" />
      </div>
    </NavLink>
  );
}
