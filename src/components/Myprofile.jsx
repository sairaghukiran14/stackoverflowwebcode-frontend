import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";

import { AiFillCaretDown } from "react-icons/ai";
const Myprofile = () => {
  const [currentuser, setCurrentuser] = useState([]);
  const [myquestions, setMyquestions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://stackoverflowwebcode-backendserver.onrender.com/myprofile",
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setCurrentuser(res.data))
      .catch((error) => console.log(error));
    axios
      .get(
        "https://stackoverflowwebcode-backendserver.onrender.com/myquestions",
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setMyquestions(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(myquestions);
  return (
    <div className="myprofile-section">
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
          <div className="fullName ml-1 text-sm">{currentuser.fullname}</div>
          <AiFillCaretDown className="text-xl ml-2 text-ogray-500" />
        </div>
        <div className="logout bg-orange-600 rounded p-1 px-3 text-white ml-2">
          <Link to="/login" onClick={() => localStorage.removeItem("token")}>
            Logout
          </Link>
        </div>
      </div>
      <div className="myprofile-content-section  border-t border-gray-300">
        <div className="MyProfile text-2xl text-center">
          Welcome {currentuser.fullname}
        </div>
        <div className="userdetails flex items-center justify-center">
          <div className="username flex">
            Fullname :
            <div className="fn-value font-semibold">{currentuser.fullname}</div>
          </div>
          <div className="useremail ml-3 border p-2 flex">
            Email Address :
            <div className="e-value font-semibold ">{currentuser.email}</div>
          </div>
        </div>
        <div className="myquestions">
          <div className="question-header">My Questions</div>
          <div className="myquestions-body">
            {myquestions &&
              myquestions?.map((myques) => (
                <div
                  className="my-question flex text-sm border-t w-5/6"
                  key={myques?._id}
                >
                  <div className="leftpart flex flex-col items-end pr-3 border-r p-3 font-semibold">
                    <div className="votes">{"0"} votes</div>
                    <div className="anwsers">{"0"} anwsers</div>
                    <div className="views">{"0"} views</div>
                  </div>
                  <div className="rightpart flex flex-col pl-3 w-5/6 p-2">
                    <div className="title text-blue-400 text-xl">
                      {myques.title}
                    </div>
                    <div className="description">{myques.body}</div>
                    <div className="tags-user-section flex justify-between pt-2">
                      <div className="tags flex">
                        {myques.tags.split(",").map((tag) => (
                          <div className="tag bg-blue-300 text-white px-2 p-1 rounded ml-1">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
