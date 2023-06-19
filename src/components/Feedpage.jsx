import React from "react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import "./css/feedpage.css";

const Feedpage = () => {
  
  return (
    <div className="feedpage-section">
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
          <FaUserNinja className="text-xl ml-3 text-orange-500" />
          <div className="fullName ml-1">ASRaghuKiran</div>
        </div>
      </div>

      <div className="feed-display-section border-t border-gray-300">
        <div className="feed-header ml-8 mt-2 text-xl text-center mb-5">
          All Questions
        </div>
        <div className="feed-body w-full flex items-center justify-center">
          <div className="feed-question flex text-sm border-t w-5/6">
            <div className="leftpart flex flex-col items-end pr-3 border-r p-3 font-semibold">
              <div className="votes">{"0"} votes</div>
              <div className="anwsers">{"0"} anwsers</div>
              <div className="views">{"0"} views</div>
            </div>
            <div className="rightpart flex flex-col pl-3 w-5/6 p-2">
              <div className="title text-blue-400 text-xl">
                Is there a better to handle set-like operations with Polars?
              </div>
              <div className="description">
                Is there a better to handle set-like operations with Polars? A
                problem: I have a data with connected ids, where I want to group
                all ids together and attach to every group of ids some unique
                id, in .
              </div>
              <div className="tags-user-section flex justify-between pt-2">
                <div className="tags flex">
                  <div className="tag bg-blue-300 text-white px-2 p-1 rounded ml-1">
                    Python
                  </div>
                  <div className="tag bg-blue-300 text-white px-2 p-1 rounded ml-1">
                    Data Science
                  </div>
                </div>
                <div className="post-user flex items-center justify-center">
                  <FaUserNinja className=" mr-2 text-orange-500" />
                  AS Raghu Kiran <div className="date ml-2"> 51 sec ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedpage;
