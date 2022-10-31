import React from "react";
import WhyUsMain from "../components/WhyUs-main";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div>
        <img src={require(`../images/logo.png`)} alt="" className="logo1" />
      </div>
      <div className="signup--prop">
        <WhyUsMain />
        <form className="form--prop">
          <p>Create Account Here</p>
          <input
            type="text"
            placeholder={"Email Address"}
            className="input--prop"
          />
          <input
            type="text"
            placeholder={"Full Name"}
            className="input--prop"
          />
          <input type="text" placeholder={"Username"} className="input--prop" />
          <input
            type="password"
            placeholder={"Password"}
            className="input--prop"
          />
          <input
            type="password"
            placeholder={"Confirm Password"}
            className="input--prop"
          />
          <span className="button--signup">
            <NavLink to="/">
              <button className="signup--but">Sign Up</button>
            </NavLink>
            <NavLink to="/login">
              <button className="signup--but">Already Have An Account?</button>
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );
}
