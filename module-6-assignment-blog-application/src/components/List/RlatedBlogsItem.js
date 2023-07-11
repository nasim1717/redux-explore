import React from "react";
import { Link } from "react-router-dom";
import { tag } from "../../utils/tags";
import Tag from "../../components/Tag/Tag";

const RlatedBlogsItem = ({ blog }) => {
  const { image, id, title, createdAt, tags: blogTags } = blog;
  let tags = "";
  if (blogTags?.length > 0) {
    tags = tag(blogTags);
  }

  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to={`/blog/${id}`} className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag}></Tag>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RlatedBlogsItem;
