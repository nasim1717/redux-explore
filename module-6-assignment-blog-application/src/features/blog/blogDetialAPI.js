import axiosInstance from "../../axios/axios";

const getBlog = async (id) => {
  const response = await axiosInstance.get(`/blogs?id=${id}`);
  return response.data;
};

export default getBlog;
