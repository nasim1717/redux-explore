import React, { useEffect, useState } from "react";
import JobsList from "../../component/Jobs/JobsList";
import Filter from "../../component/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobsFinder/jobsFinderSlice";
import { jobsSearch } from "../../util/jobsSerach";

const Home = () => {
  const { sort, jobName, jobs, search } = useSelector((state) => state.jobsFinde);
  const dispatch = useDispatch();
  const [findsJob, setFindsJob] = useState([]);
  useEffect(() => {
    dispatch(fetchJobs({ sort, jobName }));
  }, [sort, jobName, dispatch]);

  useEffect(() => {
    if (search) {
      setFindsJob(jobsSearch(jobs, search));
    } else {
      setFindsJob(jobs);
    }
  }, [jobs, search]);

  return (
    <>
      <Filter></Filter>
      {findsJob.map((job) => (
        <JobsList key={job.id} job={job}></JobsList>
      ))}
    </>
  );
};

export default Home;
