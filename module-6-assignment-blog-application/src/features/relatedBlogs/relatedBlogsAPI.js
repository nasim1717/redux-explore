import axiosInstance from "../../axios/axios";
//?tags_like=javascript&tags_like=nodejs&tags_like=react&_limit=4

const getRelatedBlogs = async (tags, id) => {
  const query =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") + `&_limit=${4}&id_ne=${id}`
      : `&id_ne=${id}&_limit=${4}`;

  console.log(query);
  const response = await axiosInstance.get(`/blogs?${query}`);
  return response.data;
};

export default getRelatedBlogs;
