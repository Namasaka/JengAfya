import React from "react";

export default function TrainersMain(props) {
  return (
    <div className="wrap">
      <div className="trainer--container">
        <img
          src={require(`../images/${props.coverImg}`)}
          alt=""
          className="trainer--img"
        />
        <p className="trainer--name">{props.title}</p>
        <p className="trainer">Trainer</p>
        <div className="social--icon">
          <a href={props.twitter}>
            <img
              src={require(`../images/icon-twitter.png`)}
              alt=""
              className="social--icon2"
            />
          </a>
          <a href={props.mail}>
            <img
              src={require(`../images/gmail.png`)}
              alt=""
              className="social--icon2"
            />
          </a>
          <a href={props.instagram}>
            <img
              src={require(`../images/icon-instagram.png`)}
              alt=""
              className="social--icon2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

// id: 1,
//     coverImg: "../images/emma.png",
//     title: "John Mark",
//     twitter: "",
//     mail: "",
//     instagram: "",
