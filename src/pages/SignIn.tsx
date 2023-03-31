import React from 'react'
const appStore = require("../assets/appStore.png")
const playStore = require("../assets/playStore.png")
const facebook = require("../assets/facebook.png")

function SignIn() {
  return (
    <>
      <div className="login-container">
        <div className="box-1">
          <div className="box-1-logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="Instagram" className="instagram-logo"></img>
          </div>
          <div className='input-box'>
            <input
              type="text"
              placeholder="Phone number, username or email" />
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
            <p className='fb-link'>Log in with Facebook</p>
          </div>
          <div className="forgotten-password-box">
            <p className="forgotten-password-link">Forgotten your password?</p>
          </div>
        </div>
        <div className='box-2'>
          <p>Don't have an account? <span className="sign-up-span">Sign Up</span></p>
        </div>
        <div className="get-app-box">
          <p>Get the app.</p>
        </div>
        <div className="app-store-google-play-box">
          <img src={appStore} alt="AppStore" className="app-store-image" />
          <img src={playStore} alt="PlayStore" className="google-play-image" />
        </div>
      </div>
    </>
  );
}

export default SignIn