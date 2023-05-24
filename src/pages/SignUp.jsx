import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/4a58c7da-82c6-4000-be65-8657463e44d3/KZ-en-20230508-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="w-full fixed px-4 py-24 z-50 ">
        <div className="max-w-[450px] h-[600px] mx-auto bg-navGradient/100 text-white ">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold text-white"> Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-500 py-3 my-6 rounded font-bald ">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-300">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me?
                </p>
                <p> Need Help? </p>
              </div>
              <p className="py-8 ">
                <span className="text-gray-300">Subscribed to Dramatic?</span>
                <Link to="/login" className="text-white ">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
