import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pollob</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
