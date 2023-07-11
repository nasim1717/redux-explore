import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import blogReducer from "../features/blog/blogDetailsSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import blogUpdateReducer from "../features/blogUpdate/blogUpdateSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    updateBlog: blogUpdateReducer,
  },
});
