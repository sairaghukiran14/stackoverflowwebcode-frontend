import React, { useEffect, useState } from "react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillCaretDown } from "react-icons/ai";
const Companies = () => {
  const [currentuser, setCurrentuser] = useState([]);
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
  }, []);
  const companyjob = {
    company: "Pied Piper",
    url: "http://piedpiper.com/",
    remoteFriendly: true,
    market: "SaaS",
    size: "10-50",
    jobs: [
      {
        position: "Software Engineer",
        title: "Backend Developer",
        description:
          "You will help us build API for our compression infrastructure.",
        url: "http://piedpiper.com/jobs/backend-developer",
        type: "full-time",
        posted: "20-01-2015",
        location: "US",
        skills: ["Python", "Javascript", "Redis"],
        salaryRange: {
          from: 90000,
          to: 100000,
          currency: "USD",
        },
        equity: {
          from: 0.005,
          to: 0.01,
        },
        perks: ["free food", "gym membership"],
        apply: "http://piedpiper.com/jobs/backend-developer/apply",
      },
      {
        position: "Software Engineer",
        title: "Frontend Developer",
        description:
          "You will help us build dashboard for our compression infrastructure.",
        url: "http://piedpiper.com/jobs/frontend-developer",
        type: "full-time",
        posted: "20-01-2015",
        location: "US",
        skills: ["Javascript", "Angular.js", "CSS"],
        salaryRange: {
          from: 90000,
          to: 100000,
          currency: "USD",
        },
        equity: {
          from: 0.005,
          to: 0.01,
        },
        perks: ["free food", "gym membership"],
        apply: "http://piedpiper.com/jobs/frontend-developer/apply",
      },
      {
        position: "UI/UX Designer",
        title: "UX Designer",
        description:
          "You will help us design dashboard for our compression infrastructure.",
        url: "http://piedpiper.com/jobs/ux-designer",
        type: "full-time",
        posted: "20-01-2015",
        location: "US",
        skills: ["HTML", "CSS", "Photoshop"],
        salaryRange: {
          from: 90000,
          to: 100000,
          currency: "USD",
        },
        equity: {
          from: 0.005,
          to: 0.01,
        },
        perks: ["free food", "gym membership"],
        apply: "http://piedpiper.com/jobs/ux-designer/apply",
      },
    ],
  };
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
          <div className="fullName ml-1 text-sm">{currentuser.fullname}</div>
          <AiFillCaretDown className="text-xl ml-2 text-ogray-500" />
        </div>

        <div className="logout bg-orange-600 rounded p-1 px-3 text-white ml-2">
          <Link to="/login" onClick={() => localStorage.removeItem("token")}>
            Logout
          </Link>
        </div>
      </div>
      <div className="header text-2xl text-center mb-2 font-semibold">
        Listings :
      </div>
      <div className="company-section flex items-center justify-center">
        <div className="companies">
          {companyjob?.jobs.map((job) => (
            <div className="vacancy flex items-center border mb-1 p-2">
              <div className="leftpart w-36 h-36 flex justify-center items-center  mr-2 text-3xl">
                {companyjob.market}
              </div>
              <div className="rightpart">
                <div className="company_name text-blue-400 font-semibold">
                  {companyjob.company}
                </div>
                <div className="title flex ">
                  Position : {job.title}
                  <div className="salaryrange ml-4 bg-blue-300 rounded px-1">
                    {" "}
                    Payscale :
                    {job.salaryRange.from + "$ to " + job.salaryRange.to + "$"}
                  </div>
                </div>
                <div className="description">
                  Description : {job.description}
                </div>
                <div className="timings bg-gray-400 w-36 text-white text-center rounded">
                  {job.type}
                </div>
                <div className="skills flex mt-2">
                  {job.skills.map((skill) => (
                    <div className="skill bg-orange-400 text-center text-white rounded px-2 mr-1">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="perks-section">
                  <div className="header">Perks :</div>
                  <div className="perks flex">
                    {job.perks.map((perk) => (
                      <div className="perk bg-black text-white text-center rounded px-2 mr-1">
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="url underline text-sm p-1">
                  <a href={job.url}>{job.url}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
