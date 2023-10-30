import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";

function Post({ post }) {
  console.log(Users);
  // console.log(post);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const clickHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users[post.userId - 1].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="name">{Users[post.userId - 1].username}</span>
            <span className="time">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post?.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="bottomLeft">
            <img
              src="assets/like.png"
              alt=""
              className="like"
              onClick={clickHandler}
            />
            <img
              src="assets/heart.png"
              alt=""
              className="like"
              onClick={clickHandler}
            />
            <span className="lc">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
