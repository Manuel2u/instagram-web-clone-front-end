import React from "react";
const img1 = require("../assets/story1.jpeg");
const img2 = require("../assets/story2.jpeg");
const img3 = require("../assets/story3.jpeg");
const img4 = require("../assets/story4.jpg");
const img5 = require("../assets/story5.jpeg");
const img6 = require("../assets/story6.jpeg");
const img7 = require("../assets/story7.jpg");
const img8 = require("../assets/story8.jpg");

function Stories() {
  return (
    <>
      <div className="md:mt-10 md:ml-2 sm:mt-4 sm:ml-2">
        <div className="flex md:flex-1 md:justify-center items-center w-[100vh]">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
              src={img1}
              alt="img1"
            />
            <p className="text-xs font-medium ml-3">khobby.dev</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
              src={img2}
              alt="img1"
            />
            <p className="text-xs ml-3 font-medium">devinee.ne</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
              src={img3}
              alt="img1"
            />
            <p className="text-xs ml-3 font-medium">eddie_bla...</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
              src={img4}
              alt="img1"
            />
            <p className="text-xs ml-3 font-medium">Kwaziron_7</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
              src={img5}
              alt="img1"
            />
            <p className="text-xs ml-3 font-medium">debbiecla...</p>
          </div>
          <div className="sm:hidden md:flex">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
                src={img6}
                alt="img1"
              />
              <p className="text-xs ml-3 font-medium">leosnoww</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
                src={img7}
                alt="img1"
              />
              <p className="text-xs ml-3 font-medium">manuel_dev</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-16 h-16 ml-2 rounded-full border-2 border-fuchsia-500"
                src={img8}
                alt="img1"
              />
              <p className="text-xs ml-3 font-medium">synlogout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
