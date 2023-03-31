import React from "react";
const img1 = require("../assets/profile2.jpeg");
const img2 = require("../assets/profile3.jpeg");
const img3 = require("../assets/profile4.jpeg");
const img4 = require("../assets/profile5.jpeg");

function Side() {
  return (
    <>
      <div className="sm:hidden md:block mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img
              className="w-14 h-14 ml-2 rounded-full "
              src={img1}
              alt="img1"
            />
            <div>
              <p className="font-semibold">manuel__dev</p>
              <p className="text-gray-500 text-base">Emmanuel Dodoo</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold text-sm">Switch</p>
          </div>
        </div>
        <div className="flex justify-between mt-5 ml-5">
          <p className="text-gray-600 font-semibold">Suggestions for you</p>
          <p className="text-blue-700 font-semibold">See all</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <img
              className="w-10 h-10 ml-2 rounded-full "
              src={img2}
              alt="img1"
            />
            <div>
              <p className="font-semibold">elon musk</p>
              <p className="text-gray-500 text-sm">
                Followed by synlogut + 1 more
              </p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold text-sm">Follow</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <img
              className="w-10 h-10 ml-2 rounded-full "
              src={img3}
              alt="img1"
            />
            <div className="">
              <p className="font-semibold">goddysmart</p>
              <p className="text-gray-500 text-sm">
                Followed by mccmhq + 20 more
              </p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold text-sm">Follow</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <img
              className="w-10 h-10 ml-2 rounded-full "
              src={img4}
              alt="img1"
            />
            <div>
              <p className="font-semibold">shabo</p>
              <p className="text-gray-500 text-sm">
                Followed by leomessi + 3 more
              </p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold text-sm">Follow</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <img
              className="w-10 h-10 ml-2 rounded-full "
              src={img4}
              alt="img1"
            />
            <div>
              <p className="font-semibold">shabo</p>
              <p className="text-gray-500 text-sm">
                Followed by leomessi + 3 more
              </p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold text-sm">Follow</p>
          </div>
        </div>
        <div className="mt-10 ml-5">
          <p className="text-xs mt-2 text-gray-500">About. Help. Press. API. Jobs. Privacy. Terms.{"\n"}Locations.Language.English.Meta Verifed</p>
          <p className="text-xs mt-2 text-gray-500"> © 2023 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>
  );
}

export default Side;
