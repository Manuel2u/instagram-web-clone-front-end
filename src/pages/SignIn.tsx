import React from "react";
import { Link } from "react-router-dom";
const appStore = require("../assets/appStore.png");
const playStore = require("../assets/playStore.png");
const facebook = require("../assets/facebook.png");

function SignIn() {
  return (
    <>
      <div className="login-container">
        <div className="box-1 flex flex-col">
          <div className="box-1-logo flex justify-center">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="Instagram"
              className="instagram-logo"
            ></img>
          </div>
          <div className="input-box">
            <input
              className="mb-4"
              type="text"
              placeholder="username or email"
            />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password" />
          </div>
          <div className="login-button-box">
            <button className="login-button">Login</button>
          </div>
          <div className="lines-box">
            <div className="line-1"></div>
            <div className="or-box">OR</div>
            <div className="line-2"></div>
          </div>
          <div className="fb-box">
            <span>
              <img src={facebook} alt="facebook" className="facebook-logo" />
            </span>
            <p className="fb-link">Log in with Facebook</p>
          </div>
          <div className="forgotten-password-box">
            <p className="forgotten-password-link">Forgotten your password?</p>
          </div>
        </div>
        <div className="box-2">
          <p>
            Don't have an account?
            <Link to="/accounts/email/signup">
              <span className="sign-up-span text-blue-500">Sign Up</span>
            </Link>
          </p>
        </div>
        <div className="get-app-box">
          <p>Get the app.</p>
        </div>
        <div className="app-store-google-play-box flex">
          <img src={appStore} alt="AppStore" className="app-store-image" />
          <img src={playStore} alt="PlayStore" className="google-play-image" />
        </div>
      </div>
    </>
  );
}

export default SignIn;
