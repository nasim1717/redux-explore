import axiosInstance from "../../axios/axios";
// ?isSaved=false&_sort=likes&_order=desc

const getBlogs = async (filter, sort) => {
  let query = "";
  // console.log(saved);
  if (filter === "saved" && sort !== "Default") {
    if (sort === "most_liked") {
      query += `isSaved=${true}&_sort=likes&_order=desc`;
    } else {
      query += `isSaved=${true}&_sort=createdAt&_order=desc`;
    }
  } else if (filter === "all" && sort !== "default") {
    if (sort === "most_liked") {
      query += `_sort=likes&_order=desc`;
    } else {
      query += `_sort=createdAt&_order=desc`;
    }
  } else if (filter === "saved" && sort === "default") {
    query += `isSaved=${true}`;
  }

  const response = await axiosInstance.get(`/blogs?${query}`);
  return response.data;
};

export default getBlogs;
