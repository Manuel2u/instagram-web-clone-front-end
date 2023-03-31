import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Button from "../components/Button";
import { useUserAuth } from "../services/context";
const appStore = require("../assets/appStore.png");
const playStore = require("../assets/playStore.png");

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserName(value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFullName(value);
  };

  const navigate = useNavigate();
  const { signup, getUser, setCustomer } = useUserAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({ username, email, password, fullName }, async () => {
        console.log("click");
        const { dbuser } = await getUser();
        await setCustomer(dbuser);
        console.log(dbuser);
        setLoading(false);
        toast.success(`Signed Up as ${dbuser.username}`);
      });

      navigate("/");
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data);
      // toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <>
      {error && toast.error(error)}
      <div className="login-container">
        <div className="box-1 flex flex-col mt-5 pb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="Instagram"
              className="instagram-logo"
            ></img>
            <p className="w-64 text-gray-500 font-bold">
              Sign up to see photos and videos from your friends.
            </p>
            <div className="fb-box bg-fb w-[260px] h-8 rounded-md mt-5">
              <span>
                <AiFillFacebook size={20} color="#fff" />
              </span>
              <p className="fb-link text-white font-semibold">
                Log in with Facebook
              </p>
            </div>
          </div>

          <div className="lines-box">
            <div className="line-1"></div>
            <div className="or-box">OR</div>
            <div className="line-2"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <div className="input-box">
                <input
                  value={email}
                  onChange={handleEmailChange}
                  name="email"
                  className="rounded-lg text-sm"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="rounded-md text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-box">
                <input
                  value={username}
                  name="username"
                  onChange={handleUserNameChange}
                  type="text"
                  className="rounded-md text-sm"
                  placeholder="Username"
                />
              </div>
              <div className="input-box">
                <input
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}
                  type="password"
                  className="rounded-md text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-[12px] w-64 text-gray-500">
                People who use our service may have uploaded your contact
                information to Instagram.
                <span className="text-blue-900 font-semibold"> Learn More</span>
              </p>
              <p className="text-xs text-[12px] w-64 text-gray-500 mt-2">
                By signing up, you agree to our{" "}
                <span className="text-blue-900 font-semibold">Terms</span> ,
                <span className="text-blue-900 font-semibold">Privacy</span>{" "}
                <span className="text-blue-900 font-semibold">
                  {" "}
                  Policy and Cookies Policy .
                </span>
              </p>
            </div>
            <div className="login-button-box mt-2">
              {/* <button className="login-button">Sign Up</button> */}
              <Button
                label="Sign Up"
                className="rounded-md bg-fb text-white border-0 w-[268px] h-[30px] font-medium cursor-pointer"
                loading={loading}
              />
            </div>
          </form>
        </div>
        <div className="box-2">
          <p>
            Have an account?
            <Link to="/accounts/login">
              <span className="sign-up-span text-blue-500"> Log in</span>
            </Link>
          </p>
        </div>
        <div className="get-app-box mb-5">
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

export default SignUp;
