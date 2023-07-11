import { tag } from "../../utils/tags";
import Tag from "../../components/Tag/Tag";
import LikeUnlike from "./LikeUnlike";

const BlogDescription = ({ blog }) => {
  const { title, description, image, tags: blogTags } = blog;
  let tags = "";
  if (blogTags?.length) {
    tags = tag(blogTags);
  }

  return (
    <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag}></Tag>
          ))}
        </div>
        <LikeUnlike></LikeUnlike>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDescription;
