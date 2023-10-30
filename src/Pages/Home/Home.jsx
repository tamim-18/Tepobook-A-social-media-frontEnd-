import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Feed from "../../Components/feed/Feed";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rightbar/Rightbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
