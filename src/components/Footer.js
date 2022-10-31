import React from "react";

export default function Footer() {
  return (
    <div className="footer--items">
      <span>
        <img
          src={require(`../images/github.png`)}
          alt=""
          className="footer--image"
        />
        <img
          src={require(`../images/instagram.png`)}
          alt=""
          className="footer--image"
        />
        <img
          src={require(`../images/linkedin.png`)}
          alt=""
          className="footer--image"
        />
      </span>
      <img
        src={require(`../images/logo.png`)}
        alt=""
        className="logo--bottom"
      />
    </div>
  );
}
