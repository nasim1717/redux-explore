import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { changeJobs } from "../features/jobsFinder/jobsFinderSlice";

const EditJobs = () => {
  const dispatch = useDispatch();
  const datas = useLoaderData()[0];
  const [title, setTitle] = useState(datas?.title);
  const [type, setType] = useState(datas?.type);
  const [salary, setSalary] = useState(datas?.salary);
  const [deadline, setDeadline] = useState(datas?.deadline);
  console.log("data-->", datas);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, type, salary, deadline };
    dispatch(changeJobs({ data, id: datas?.id }));
  };

  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="fieldContainer">
            <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">
              Job Title
            </label>
            <select
              onChange={(e) => setTitle(e.target.value)}
              id="lws-JobTitle"
              value={title}
              name="lwsJobTitle"
              required
            >
              <option hidden>Select Job</option>
              <option value={"Software Engineer"}>Software Engineer</option>
              <option value={"Software Developer"}>Software Developer</option>
              <option value={"Full Stack Developer"}>Full Stack Developer</option>
              <option value={"MERN Stack Developer"}>MERN Stack Developer</option>
              <option value={"DevOps Engineer"}>DevOps Engineer</option>
              <option value={"QA Engineer"}>QA Engineer</option>
              <option value={"Product Manager"}>Product Manager</option>
              <option value={"Social Media Manager"}>Social Media Manager</option>
              <option value={"Senior Executive"}>Senior Executive</option>
              <option value={"Junior Executive"}>Junior Executive</option>
              <option value={"Android App Developer"}>Android App Developer</option>
              <option value={"IOS App Developer"}>IOS App Developer</option>
              <option value={"Frontend Developer"}>Frontend Developer</option>
              <option value={"Frontend Enginee"}>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select
              onChange={(e) => setType(e.target.value)}
              id="lws-JobType"
              value={type}
              name="lwsJobType"
              required
            >
              <option hidden>Select Job Type</option>
              <option value={"Full Time"}>Full Time</option>
              <option value={"Internship"}>Internship</option>
              <option value={"Remotes"}>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                onChange={(e) => setSalary(e.target.value)}
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                value={salary}
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input
              onChange={(e) => setDeadline(e.target.value)}
              type="date"
              value={deadline}
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
            />
          </div>

          <div className="text-right">
            <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditJobs;
