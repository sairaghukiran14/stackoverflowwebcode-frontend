import React from "react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";
import background from "./img/sofbackground.jpeg";
import loginfun from "./img/loginfun.gif";

const Login = () => {
  return (
    <div className="Loginsection">
      <div className="navbar border-t-2 border-orange-500 p-2 flex justify-between items-center pl-2 ">
        <div className="logo  flex text-xl font-sans justify-center items-center">
          <BsStackOverflow className="text-orange-500 text-xl" />
          stack <b className="font-bold">overflow</b>
        </div>
        <div className="routing">
          <button className="px-3 py-1 bg-blue-500 border-0 rounded text-white mr-1">
            <Link to="/registration">Register</Link>
          </button>
          <button className="px-3 py-1 bg-orange-400 border-0 rounded text-white mr-1">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <div
        className="login-form flex flex-col pt-10 items-center h-screen bg-cover bg-opacity-50"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="form h-2/3 border  p-8 rounded bg-white">
          <div className="form-header ">
            Login to your stackoverflow account
          </div>
          <form action="" className="flex flex-col w-72 ">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border rounded p-1 mt-2"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="border rounded p-1 mt-2"
            />
            <button className="bg-orange-500 text-white rounded p-1 mt-2">
              Login
            </button>
          </form>
          <div className="loginroute flex mt-2">
            Don't you have an account?
            <Link
              to="/registration"
              className="font-semibold ml-1 text-blue-500"
            >
              Register
            </Link>
          </div>
          <img src={loginfun} alt="" className="h-3/5 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
