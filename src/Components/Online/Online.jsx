import React from "react";
import "./online.css";

function Online({ user }) {
  return (
    <li className="friend">
      <div className="imgContainer">
        <img src={user.profilePicture} alt="" className="img" />
        <span className="online"></span>
      </div>
      <span className="username">{user.username}</span>
    </li>
  );
}

export default Online;
