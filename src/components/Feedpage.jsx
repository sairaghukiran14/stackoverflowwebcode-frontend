import React, { useState, useEffect } from "react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import "./css/feedpage.css";
import axios from "axios";
import {
  AiOutlineCaretDown,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
const Feedpage = () => {
  const [ques, setQues] = useState([]);
  // const [currentuser, setCurrentuser] = useState([]);
  // const [displayuser, setDisplayUsers] = useState([]);
  const [getname, setGetname] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://stackoverflowwebcode-backendserver.onrender.com/allquestions",
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setQues(res.data))
      .catch((error) => console.log(error));
    // axios
    //   .get(
    //     "https://stackoverflowwebcode-backendserver.onrender.com/myprofile",
    //     {
    //       headers: {
    //         "x-token": localStorage.getItem("token"),
    //       },
    //     }
    //   )
    //   .then((res) => setCurrentuser(res.data))
    //   .catch((error) => console.log(error));
  }, []);
  const onloadhandler = (id) => {
    axios
      .get(`https://stackoverflowwebcode-backendserver.onrender.com/${id}`)
      .then((res) => setGetname(res.data))
      .catch((error) => console.log(error));
  };
  // console.log(getname);

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
          <div className="fullName ml-1 text-sm">ASRaghuKiran</div>
          <AiOutlineCaretDown className="text-xl ml-2 text-ogray-500" />
        </div>

        <div className="logout bg-orange-600 rounded p-1 px-3 text-white ml-2">
          <Link to="/login" onClick={() => localStorage.removeItem("token")}>
            Logout
          </Link>
        </div>
      </div>

      <div className="feed-display-section border-t border-gray-300">
        <div className="feed-header ml-8 mt-2 text-xl text-center mb-5">
          All Questions
        </div>
        <div className="feed-body w-full flex flex-col items-center justify-center">
          {ques &&
            ques.length &&
            ques.map((q) => (
              <div
                className="feed-question flex text-sm border-t w-5/6"
                key={ques?._id}
              >
                <div className="leftpart flex flex-col items-end pr-3 border-r p-3 font-semibold">
                  <div className="votes">{"0"} votes</div>
                  <div className="anwsers">{q.anwsers_count} anwsers</div>
                  <div className="views">{q.view_count} views</div>
                </div>
                <div className="rightpart flex flex-col pl-3 w-5/6 p-2">
                  <div className="title text-blue-400 text-xl">
                    <Link to={`/individualquestion/${q._id}`} className="">
                      {q.title}
                    </Link>
                  </div>
                  <div className="description">{q.body}</div>
                  <div className="tags-user-section flex justify-between pt-2">
                    <div className="tags flex">
                      {q.tags.split(",").map((tag) => (
                        <div className="tag bg-blue-300 text-white px-2 p-1 rounded ml-1">
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="post-user flex items-center justify-center">
                      <FaUserNinja className=" mr-2 text-orange-500" />
                      <div className="name" onLoad={onloadhandler(q.user_id)}>
                        {getname}
                      </div>

                      <div className="date ml-2"> 51 sec ago</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* {ques && <div>hhh</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Feedpage;
