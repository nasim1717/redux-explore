import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFileCirclePlus, faStop } from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jobName } from "../../../features/jobsFinder/jobsFinderSlice";

const Asidebar = () => {
  const path = useMatch("/");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleAllJobs = () => {
    if (!path) {
      navigator("/");
    }
    dispatch(jobName(""));
  };
  const handleInternJobs = () => {
    if (!path) {
      navigator("/");
    }
    dispatch(jobName("Internship"));
  };
  const handleFullTimeJobs = () => {
    if (!path) {
      navigator("/");
    }
    dispatch(jobName("Full Time"));
  };
  const handleRemoteJobs = () => {
    if (!path) {
      navigator("/");
    }
    dispatch(jobName("Remote"));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button onClick={handleAllJobs} className="main-menu menu-active" id="lws-alljobs-menu">
              <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
              <span> All Available Jobs</span>
            </button>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button
                  onClick={handleInternJobs}
                  className="sub-menu"
                  href="/jobs/internship"
                  id="lws-internship-menu"
                >
                  <FontAwesomeIcon icon={faStop} className="!text-[#FF5757]" />
                  &nbsp; Internship
                </button>
              </li>
              <li>
                <button
                  onClick={handleFullTimeJobs}
                  className="sub-menu"
                  href="/jobs/fulltime"
                  id="lws-fulltime-menu"
                >
                  <FontAwesomeIcon icon={faStop} className="!text-[#FF8A00]"></FontAwesomeIcon>
                  &nbsp; Full Time
                </button>
              </li>
              <li>
                <button
                  onClick={handleRemoteJobs}
                  className="sub-menu"
                  href="/jobs/remote"
                  id="lws-remote-menu"
                >
                  <FontAwesomeIcon icon={faStop} className="!text-[#56E5C4]"></FontAwesomeIcon>
                  &nbsp; Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addjob" className="main-menu" id="lws-addJob-menu">
              <FontAwesomeIcon icon={faFileCirclePlus}></FontAwesomeIcon> &nbsp;
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Asidebar;
