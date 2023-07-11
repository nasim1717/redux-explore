import axiosInstance from "../../axios/axios";

const updateBlog = async (id, value, saved) => {
  console.log(id, " ", value);
  const response = await axiosInstance.patch(`/blogs/${id}`, { likes: value, isSaved: saved });
  console.log(response.data);
  return response.data;
};

export default updateBlog;
