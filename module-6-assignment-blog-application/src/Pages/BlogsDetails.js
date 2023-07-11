import React, { useEffect } from "react";
import GoHome from "../components/Navbar/GoHome";
import BlogDescription from "../components/Description/BlogDescription";
import RelatedBlogs from "../components/List/RelatedBlogs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { blogFetch } from "../features/blog/blogDetailsSlice";

const BlogsDetails = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { blog, isLoading, isError, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(blogFetch(blogId));
  }, [dispatch, blogId]);

  let content = "";
  if (isLoading) {
    content = <div>Loading</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && blog?.length === 0) {
    content = <div>data not found!</div>;
  }
  if (!isLoading && !isError && blog?.length > 0) {
    content = <BlogDescription blog={blog[0]}></BlogDescription>;
  }

  return (
    <>
      <GoHome></GoHome>
      <section className="post-page-container">
        {content}
        <RelatedBlogs></RelatedBlogs>
      </section>
    </>
  );
};

export default BlogsDetails;
