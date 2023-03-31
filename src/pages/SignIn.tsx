import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../services/context";
const appStore = require("../assets/appStore.png");
const playStore = require("../assets/playStore.png");
const facebook = require("../assets/facebook.png");

function SignIn() {
  const [email_username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };
  const navigate = useNavigate();
  const { login, getUser, setCustomer } = useUserAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email_username, password }, async () => {
        const { dbuser } = await getUser();
        await setCustomer(dbuser);
        setLoading(false);
        navigate("/");

        toast.success(`Signed in as ${dbuser.username}`);
      });
    } catch (error: any) {
      setLoading(false);
      setError(error);
      navigate("/signin");
      toast.error(`Error: ${error}`);
      // toast.error(error.response.data);
      console.log(error);
    }
  };
  return (
    <>
      {error && toast.error(error)}
      <div className="login-container h-screen">
        <div className="box-1 flex flex-col pb-5">
          <div className="box-1-logo flex justify-center">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="Instagram"
              className="instagram-logo"
            ></img>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                name="email_username"
                value={email_username}
                onChange={handleEmailChange}
                className="mb-4"
                type="text"
                placeholder="username or email"
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </div>
            <div className="login-button-box mt-2">
              <Button
                label="Sign In"
                className="rounded-md bg-fb text-white border-0 w-[268px] h-[30px] font-medium cursor-pointer"
                loading={loading}
              />
            </div>
          </form>
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
              <span className="sign-up-span text-blue-500"> Sign Up</span>
            </Link>
          </p>
        </div>
        <div className="get-app-box mt-2">
          <p>Get the app.</p>
        </div>
        <div className="app-store-google-play-box flex mt-5">
          <img src={appStore} alt="AppStore" className="app-store-image" />
          <img src={playStore} alt="PlayStore" className="google-play-image" />
        </div>
      </div>
    </>
  );
}

export default SignIn;
