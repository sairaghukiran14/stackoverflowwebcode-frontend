import React from "react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
const Companies = () => {
  return (
    <div className="Companies-section">
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
    </div>
  );
};

export default Companies;
