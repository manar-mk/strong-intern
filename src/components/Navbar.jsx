import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import requests from "../Requests";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center p-1 z-[100] w-full absolute bg-gradient-to-r from-black to-navGradient">
      <div className="flex items-center space-x-10">
        <a
          href="/"
          className="text-yellow-400 text-4xl px-6 py-0.5 font-griffy cursor-pointer"
        >
          DRAMATIC
        </a>
        <a href="/" className="text-navbar font-bold hover:text-white">
          HOME
        </a>
        <a href="/" className="text-navbar  font-bold hover:text-white">
          MOVIES
        </a>
        <a href="/" className="text-navbar font-bold hover:text-white">
          TV SHOWS
        </a>
        <a href="/" className="text-navbar font-bold hover:text-white">
          NEW
        </a>
      </div>
      <div className="flex  items-center space-x-6">
        <form>
          {" "}
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-search text-searchText rounded-2xl px-6 py-2 pl-10 placeholder-searchText"
            />
            <button>
              <img
                className="absolute top-3 right-3 h-4 w-4"
                src="/assets/search1.svg"
                alt="search"
              />
            </button>
          </div>
        </form>

        <a href="/" className="text-navbar hover:text-white">
          <img className="" src="/assets/gift1.svg" alt="search" />
        </a>
        <a href="/" className="text-navbar  hover:text-white">
          <img className="" src="/assets/bell1.svg" alt="search" />
        </a>

        {user?.email ? (
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className=" text-white pr-4 font-bold cursor-pointer"
            >
              LOGOUT
            </button>

            <Link to="/account">
              <button className="  w-auto h-auto text-white font-bold px-6 py-2 rounded cursor-pointer">
                <div className="flex items-center">
                  <img
                    className="scale-75"
                    src="/assets/account1.svg"
                    alt="account"
                  />
                  {/* <img src="/assets/account1.svg" alt="online" /> */}
                </div>
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className=" text-white pr-4 font-bold cursor-pointer">
                SIGN IN
              </button>
            </Link>
            <Link to="/signup">
              <button className=" bg-red-500 text-white font-bold px-6 py-2 rounded cursor-pointer">
                SIGN UP
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
