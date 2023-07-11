import React, { useEffect } from "react";
import RlatedBlogsItem from "./RlatedBlogsItem";
import { useSelector, useDispatch } from "react-redux";
import { relatdBlogsFetch } from "../../features/relatedBlogs/relatedBlogsSlice";

const RelatedBlogs = () => {
  const blogtag = useSelector((state) => state?.blog?.blog[0]);
  const { isLoading, isError, error, relatedBlogs } = useSelector((state) => state.relatedBlogs);
  const dispatch = useDispatch();

  let tags = {};
  if (blogtag) {
    tags = blogtag;
  }

  useEffect(() => {
    dispatch(relatdBlogsFetch({ tags: tags?.tags, id: tags?.id }));
  }, [dispatch, tags]);

  let content = "";
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div>data not found!</div>;
  }

  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RlatedBlogsItem key={blog.id} blog={blog}></RlatedBlogsItem>
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedBlogs;
