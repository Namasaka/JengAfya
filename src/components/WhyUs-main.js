import React from "react";

export default function WhyUsMain() {
  return (
    <div className="whyUs">
      <img
        src={require(`../images/whyus.png`)}
        alt="img"
        className="whyus--img"
      />
      <span className="whyus--text">
        <h3>SOME REASONS FOR CHOOSING US.</h3>
        <div>
          <img src={require(`../images/tick.png`)} alt="" className="tick" />
          <p>OVER 140+ EXPERT COACHES</p>
        </div>
        <div>
          <img src={require(`../images/tick.png`)} alt="" className="tick" />
          <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
        </div>
        <div>
          <img src={require(`../images/tick.png`)} alt="" className="tick" />
          <p>RELIABLE PARTNERS</p>
        </div>
      </span>
    </div>
  );
}
