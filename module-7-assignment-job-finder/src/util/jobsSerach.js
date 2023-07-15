export const jobsSearch = (jobs, search) => {
  console.log("job Search funtion-->", search);
  const findJob = jobs.filter((job) => job.type === search);
  return findJob;
};
