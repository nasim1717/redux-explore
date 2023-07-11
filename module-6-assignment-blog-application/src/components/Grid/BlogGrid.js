import React, { useEffect } from "react";
import BlogGridItem from "./BlogGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { sort, filter } = useSelector((state) => state.filters);
  const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs({ filter, sort }));
  }, [dispatch, filter, sort]);

  let content = "";
  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (!isLoading && isError === true) {
    content = <div>{error}</div>;
  }

  if (!isError && !isLoading && blogs?.length === 0) {
    content = <div>data not found!</div>;
  }

  if (!isError && !isLoading && blogs?.length > 0) {
    content = blogs.map((blog) => <BlogGridItem key={blog.id} blog={blog}></BlogGridItem>);
  }
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default BlogGrid;
