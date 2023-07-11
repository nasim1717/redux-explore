import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogUpdate } from "../../features/blogUpdate/blogUpdateSlice";

const LikeUnlike = () => {
  const dispatch = useDispatch();
  const { likes, isSaved, id } = useSelector((state) => state.blog.blog[0]);
  const { likes: like } = useSelector((state) => state?.updateBlog?.updateBlog);
  const [updateLike, setLikes] = useState(likes);
  const [saved, setSaved] = useState(isSaved);

  useEffect(() => {
    if (like) {
      setLikes(like);
    }
  }, [like]);

  useEffect(() => {
    setLikes(likes);
  }, [likes]);

  // console.log("like", likes, updateLike);
  const hadleLikes = (likes) => {
    likes = parseInt(likes) + 1;
    dispatch(blogUpdate({ likes, id }));
  };

  const handleSaved = () => {
    dispatch(blogUpdate({ likes: updateLike, id, saved: !saved }));
    setSaved(!saved);
  };

  return (
    <div className="btn-group">
      <button className="like-btn" id="lws-singleLinks" onClick={() => hadleLikes(updateLike, id)}>
        <i className="fa-regular fa-thumbs-up"></i> {updateLike}
      </button>

      <button
        className={`${saved && "active"} save-btn`}
        id="lws-singleSavedBtn"
        onClick={handleSaved}
      >
        <i className="fa-regular fa-bookmark"></i> Saved
      </button>
    </div>
  );
};

export default LikeUnlike;
