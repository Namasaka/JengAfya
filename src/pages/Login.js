import React from "react";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div className="center--log">
      <div className="login--prop">
        <img
          src={require(`../images/login.png`)}
          alt=""
          className="login--pic"
        />

        <form className="form--prop">
          <div>
            <img src={require(`../images/logo.png`)} alt="" className="logo1" />
          </div>
          <p>Login Here</p>
          <input type="text" placeholder={"Username"} className="input--prop" />
          <input
            type="password"
            placeholder={"Password"}
            className="input--prop"
          />
          <span className="button--signup">
            <NavLink to="/">
              <button className="signup--but">Log In</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="signup--but">Don't Have An Account?</button>
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );
}
