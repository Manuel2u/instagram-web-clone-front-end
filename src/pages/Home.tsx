import React from "react";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import Side from "../components/Side";

function Home() {
  return (
    <>
      <div className="flex flex-row h-screen relative">
        <div className="fixed left-0 top-0">
          <Navbar />
        </div>
        <div className="w-60"></div>
        <div className="flex-1 flex flex-row ">
          <div className="flex-1">
            <Stories />
            <div className="mt-10">
              <Posts />
              <Posts />
              <Posts />
              <Posts />
            </div>
          </div>
          <div className="flex-1 pr-14">
            <Side />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
