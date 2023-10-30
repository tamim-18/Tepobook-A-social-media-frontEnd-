import React from "react";
import { MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="name">Taohid Khan Tamim</span>
            <span className="time">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}

export default Post;
