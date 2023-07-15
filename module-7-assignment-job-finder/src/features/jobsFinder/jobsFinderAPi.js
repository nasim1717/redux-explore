import axiosInstance from "../../axios/axios";

export const getJobs = async (sort, jobName) => {
  // http://localhost:9000/jobs/?_sort=salary&_order=asc
  // http://localhost:9000/jobs/?_sort=salary&_order=asc&type=Internship
  let query = "";
  if (sort && jobName) {
    if (sort === "Salary (Low to High)") {
      query = `?_sort=salary&_order=asc&type=${jobName}`;
    } else {
      query = `?_sort=salary&_order=desc&type=${jobName}`;
    }
  }
  if (!sort && jobName) {
    query = `?type=${jobName}`;
  }
  if (sort && !jobName) {
    if (sort === "Salary (Low to High)") {
      query = `?_sort=salary&_order=asc`;
    } else {
      query = `?_sort=salary&_order=desc`;
    }
  }

  // console.log(axiosInstance);
  const response = await axiosInstance.get(`/jobs/${query}`);

  return response.data;
};
export const addJobs = async (data) => {
  const response = await axiosInstance.post("/jobs", data);

  return response.data;
};

export const editJobs = async (id, data) => {
  const response = await axiosInstance.put(`/jobs/${id}`, data);

  return response.data;
};

export const deletetJobs = async (id) => {
  const response = await axiosInstance.delete(`/jobs/${id}`);

  return response.data;
};
