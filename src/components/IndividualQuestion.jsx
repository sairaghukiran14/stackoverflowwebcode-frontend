import React, { useState, useEffect } from "react";
import { BsStackOverflow } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import { TbUpload } from "react-icons/tb";
import axios from "axios";
import {
  AiOutlineCaretDown,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
  AiOutlineUser,
} from "react-icons/ai";
const IndividualQuestion = () => {
  const routeParams = useParams();
  let viewcount = false;
  const [qanwsers, setQanwsers] = useState([]);
  const [getname, setGetname] = useState([]);
  window.addEventListener("load", (event) => {
    viewcount = true;
  });
  const [currentQuestion, setcurrentQuestion] = useState([]);
  const data = {
    questionid: routeParams.id,
    viewcount,
  };
  useEffect(() => {
    axios
      .post("http://localhost:8022/updatequestions", data)
      .then((res) => setcurrentQuestion(res.data))
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8022/allanwsers/${data.questionid}`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setQanwsers(res.data));
  }, []);
  const onloadhandler = (id) => {
    axios
      .get(`http://localhost:8022/${id}`)
      .then((res) => setGetname(res.data))
      .catch((error) => console.log(error));
  };

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
        {/* <div className="userprofile flex items-center justify-center border p-1 ml-2 bg-gray-200 rounded">
          <div className="fullName ml-1 text-sm">ASRaghuKiran</div>
          <AiFillCaretDown className="text-xl ml-2 text-ogray-500" />
        </div> */}
      </div>
      <div className="question-content border-t border-gray-300 flex flex-col">
        <div className="question-title text-2xl text-center border-b p-2">
          {currentQuestion.title}
        </div>
        <div className="question-body flex w-3/4 justify-center items-center">
          <div className="votes-section flex flex-col w-48 items-center">
            <AiOutlineUpCircle className="text-3xl" />
            {"250"}
            <AiOutlineDownCircle className="text-3xl" />
          </div>
          <div className="question-right">
            <div className="question-description">{currentQuestion.body}</div>
          </div>
        </div>

        <div className="anwser-section flex flex-col items-center">
          <div className="line h-0.5 bg-gray-400 w-4/5"></div>
          <div className="anwsers-count font-semibold text-xl">
            {qanwsers.length} Anwsers
          </div>
          <div className="display-anwsers border w-full justify-start items-center">
            {qanwsers.map((qa) => (
              <div className="anwser border-b flex p-1">
                <div className="votes-section flex flex-col w-48 items-center">
                  <div className="upvote">
                    <AiOutlineUpCircle className="text-3xl rounded-full hover:bg-pink-50" />
                  </div>
                  <div className="vote_value"></div>
                  <div className="downvote">
                    <AiOutlineDownCircle className="text-3xl rounded-full hover:bg-pink-50" />
                  </div>
                </div>
                <div className="content flex flex-col">
                  <div className="body">{qa["body"]}</div>
                  <div
                    className="user_anwser flex justify-between text-sm  "
                    onLoad={onloadhandler(qa.user_id)}
                  >
                    <div className="div"></div>
                    <div className="div1 flex items-center rounded bg-blue-200 p-1">
                      <AiOutlineUser className="mr-1 text-bold" />
                      {getname}
                    </div>
                  </div>
                  <div className="commentsection_header flex items-center">
                    <FaRegComments className="mr-1" />
                    Comments :
                  </div>
                  <div className="listcomments">{}</div>
                  <div className="addcomment">
                    <textarea
                      name=""
                      id=""
                      cols="60"
                      rows="2"
                      className="text-sm p-1 border"
                    ></textarea>
                    <button className="flex items-center justify-end bg-blue-400 rounded px-2 p-1 text-white">
                      Add Comment <TbUpload className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="newanwser-section"></div>
        </div>
      </div>
    </div>
  );
};

export default IndividualQuestion;
