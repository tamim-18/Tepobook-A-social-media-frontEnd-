import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Tamim</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="title"> User Info</h4>
        <div className="infoo">
          <div className="infoItem">
            <span className="infoKey">City:</span>
            <span className="infoValue">Dhaka</span>
          </div>
          <div className="infoItem">
            <span className="infoKey">From:</span>
            <span className="infoValue">Bangladesh</span>
          </div>
          <div className="infoItem">
            <span className="infoKey">Relationship:</span>
            <span className="infoValue">Single</span>
          </div>
        </div>
        <h4 className="titl">User Following</h4>
        <div className="followings">
          <div className="following">
            <img src="/assets/person/1.jpeg" alt="" className="followingImg" />
            <span className="followingName">Tamim</span>
          </div>
          <div className="following">
            <img src="/assets/person/2.jpeg" alt="" className="followingImg" />
            <span className="followingName">Tamim</span>
          </div>
          <div className="following">
            <img src="/assets/person/3.jpeg" alt="" className="followingImg" />
            <span className="followingName">Tamim</span>
          </div>
          <div className="following">
            <img src="/assets/person/4.jpeg" alt="" className="followingImg" />
            <span className="followingName">Tamim</span>
          </div>
          <div className="following">
            <img src="/assets/person/5.jpeg" alt="" className="followingImg" />
            <span className="followingName">Tamim</span>
          </div>
          <div className="following">
            <img src="/assets/person/6.jpeg" alt="" className="followingImg" />
            <span className="followingName">Tamim</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
