import React, { useState, useEffect } from "react";
import { BsStackOverflow } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AiFillCaretDown,
  AiFillDownCircle,
  AiFillUpCircle,
} from "react-icons/ai";
const IndividualQuestion = () => {
  const routeParams = useParams();
  let viewcount = false;
  window.addEventListener("load", (event) => {
    viewcount = true;
  });
  const data = {
    questionid: routeParams._id,
    viewcount,
  };
  useEffect(() => {
    axios
      .post(
        "https://stackoverflowwebcode-backendserver.onrender.com/updatequestions",
        data
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="question-section-page">
      <div className="navbar border-t-2 border-orange-500 p-2 flex  items-center pl-2 ">
        <div className="logo  flex text-xl font-sans justify-center items-center pl-6">
          <BsStackOverflow className="text-orange-500 text-xl" />
          stack <b className="font-bold">overflow</b>
        </div>
        <div className="click-section ml-3 flex ">
          <button className="px-3 p-1 rounded text-sm">
            <Link to="/questions">Questions</Link>
          </button>
          <button className="px-3 p-1 rounded text-sm">
            <Link to="/companies">Companies</Link>
          </button>
        </div>
        <div className="search flex w-full">
          <input
            type="text"
            placeholder={"Search"}
            className="border w-full p-1 ml-3 rounded"
          />
        </div>
        <div className="userprofile flex items-center justify-center border p-1 ml-2 bg-gray-200 rounded">
          <div className="fullName ml-1 text-sm">ASRaghuKiran</div>
          <AiFillCaretDown className="text-xl ml-2 text-ogray-500" />
        </div>
      </div>
      <div className="question-content border-t border-gray-300 flex flex-col">
        <div className="question-title text-2xl text-center border-b p-2">
          {routeParams.title}
        </div>
        <div className="question-body flex w-3/4 justify-center items-center">
          <div className="votes-section flex flex-col w-48 items-center">
            <AiFillUpCircle className="text-3xl" />
            {"250"}
            <AiFillDownCircle className="text-3xl" />
          </div>
          <div className="question-right">
            <div className="question-description">
              Is there a better to handle set-like operations with Polars? A
              problem: I have a data with connected ids, where I want to group
              all ids together and attach to every group of ids some unique id,
            </div>
          </div>
        </div>

        <div className="anwser-section flex flex-col items-center">
          <div className="line h-0.5 bg-gray-400 w-4/5"></div>
          <div className="anwsers-count">{"0 Anwsers"}</div>
          <div className="display-anwsers"></div>
          <div className="newanwser-section"></div>
        </div>
      </div>
    </div>
  );
};

export default IndividualQuestion;
