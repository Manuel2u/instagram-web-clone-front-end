import React from "react";
import { SlOptions } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";

const img1 = require("../assets/messi1.jpeg");

function Posts() {
  return (
    <>
      <div className="w-[450px] ml-48">
        <div className="flex justify-between mt-4 items-center">
          <div className="flex items-center gap-x-2">
            <img
              alt="profile"
              className="h-10 w-10 rounded-full"
              src={img1}
            ></img>
            <div className="flex items-center gap-x-1">
              <p> leomessi</p>
              <MdVerified size={15} color="#1DA1F2" />
            </div>
            <p>•</p>
            <p className="font-medium">1d</p>
          </div>
          <div>
            <SlOptions size={20} />
          </div>
        </div>
        <div className="mt-2">
          <img src={img1} className=" rounded-md h-[500px]" alt="post" />
        </div>
        <div className="flex justify-between  mt-2">
          <div className="flex gap-x-2">
            <AiFillHeart color="red" size={23} />
            <TbMessageCircle2 size={23} />
            <IoIosSend size={23} />
          </div>
          <div>
            <BsBookmark size={23} />
          </div>
        </div>
        <div>
          <p className="font-semibold">101,123,566 likes</p>
          <p className="text-[15px]">
            <span className="font-semibold">leomessi</span> Match Day.. Cooking
            Day…Messi Day.🇬🇭
          </p>
          <p className="text-gray-500">View all 336 comments</p>
        </div>
        <p className="text-[15px]">
          <span className="font-semibold">ronaldo</span> bro you the best 👌🏾
        </p>
        <p className="text-[15px]">
          <span className="font-semibold">manuel</span> ❤️❤️
        </p>
        <p className="text-sm text-gray-500 mt-2">Add a comment</p>
        <div className="h-[0.5px] bg-gray-500 mt-4"></div>
      </div>
    </>
  );
}

export default Posts;
