import React from "react";
import { Link } from "react-router-dom";
import { tag } from "../../utils/tags";
import Tag from "../Tag/Tag";

const BlogGridItem = ({ blog }) => {
  const { id, image, title, tags: blogTags, likes, isSaved, createdAt } = blog;
  let tags;
  if (blogTags?.length > 0) {
    tags = tag(blogTags);
  }

  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag}></Tag>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <span className={`${isSaved && "lws-badge"}`}> Saved </span>
        </div>
      </div>
    </div>
  );
};

export default BlogGridItem;
