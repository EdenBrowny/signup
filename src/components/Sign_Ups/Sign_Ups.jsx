import React from "react";
import "./Sign_Ups.css";

function Sign_Ups() {
  return (
    <>
      <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45"></div>
          <div className="pill-2 rotate-45"></div>
          <div className="pill-3 rotate-45"></div>
          <div className="pill-4 rotate-45"></div>
        </div>
        <div className="login">
          <h3 className="title">User Login</h3>
          <div className="text-input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="text-input">
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">LogIn</button>
          <a href="#" className="forget">
            Forget Password?
          </a>
          <div className="create">
            <a href="#">Create Your Account</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign_Ups;
