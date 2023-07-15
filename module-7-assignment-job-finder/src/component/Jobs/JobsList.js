import { faCalendar, faPen, faStop, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeJobs } from "../../features/jobsFinder/jobsFinderSlice";

const JobsList = ({ job }) => {
  const dispatch = useDispatch();
  const { title, type, salary, deadline, id } = job;
  const handleDelete = () => {
    dispatch(removeJobs(id));
  };
  return (
    <div className="jobs-list">
      {/* <!-- Single Job 1--> */}
      <div className="lws-single-job">
        <div className="flex-1 min-w-0">
          <h2 className="lws-title">{title}</h2>
          <div className="job-footers">
            <div className="lws-type">
              <FontAwesomeIcon
                icon={faStop}
                className={`${type === "Full Time" && "!text-[#FF8A00]"} ${
                  type === "Internship" && "!text-[#FF5757]"
                } ${type === "Remote" && "!text-[#56E5C4]"} text-lg mr-1.5s`}
              />
              &nbsp; {type}
            </div>
            <div className="lws-salary">BDT {salary}</div>
            <div className="lws-deadline">
              <FontAwesomeIcon icon={faCalendar} className="text-slate-400 text-lg mr-1.5" />
              &nbsp; Closing on {deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <Link to={`/editjob/${id}`}>
              <button type="button" className="lws-edit btn btn-primary">
                <FontAwesomeIcon icon={faPen} className="fa-pen text-gray-300 -ml-1 mr-2" />
                Edit
              </button>
            </Link>
          </span>

          <span className="sm:ml-3">
            <button onClick={handleDelete} type="button" className="lws-delete btn btn-danger ">
              <FontAwesomeIcon icon={faTrash} className="text-gray-300 -ml-1 mr-2" />
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
