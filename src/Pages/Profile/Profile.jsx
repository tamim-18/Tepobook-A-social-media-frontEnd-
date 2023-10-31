import React from "react";
import "./profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import Feed from "../../Components/feed/Feed";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="top">
            <div className="cover">
              <img className="coverImg" src="assets/post/3.jpeg" alt="" />
              <img className="userImg" src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="info">
              <h4 className="infoName">Safak Kocaoglu</h4>
              <span className="infoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
