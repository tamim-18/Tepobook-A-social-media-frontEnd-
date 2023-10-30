import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <span className="logo">TepoMedia</span>
      </div>
      <div className="navBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLink">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="navBarIcon">
          <div className="navBarIconItem">
            <Person />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Chat />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Notifications />
            <span className="navBarIconBadge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="navBarImg" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
