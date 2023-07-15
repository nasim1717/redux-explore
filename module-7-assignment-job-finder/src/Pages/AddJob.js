import React from "react";
import { useDispatch } from "react-redux";
import { createJobs } from "../features/jobsFinder/jobsFinderSlice";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.lwsJobTitle.value;
    const type = form.lwsJobType.value;
    const salary = form.lwsJobSalary.value;
    const deadline = form.lwsJobDeadline.value;
    console.log({ title, type, salary, deadline });
    const data = { title, type, salary, deadline };
    dispatch(createJobs(data));
    navigator("/");
  };

  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleJob} className="space-y-6">
          <div className="fieldContainer">
            <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">
              Job Title
            </label>
            <select id="lws-JobTitle" defaultValue="" name="lwsJobTitle" required>
              <option hidden value="">
                Select Job
              </option>
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
            <select id="lws-JobType" defaultValue="" name="lwsJobType" required>
              <option hidden value={""}>
                Select Job Type
              </option>
              <option value={"Full Time"}>Full Time</option>
              <option value={"Internship"}>Internship</option>
              <option value={"Remote"}>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
          </div>

          <div className="text-right">
            <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
