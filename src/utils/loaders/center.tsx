import * as React from "react";
const logo = require("../../assets/iglogo.png");
const logo1 = require("../../assets/logo2.png");

const DataLoader = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center my-auto h-screen">
        <div className="flex justify-between h-3/5 items-center flex-col mt-48">
          <img className="w-28 h-28" src={logo} alt="logo" />
          <img className="w-28 h-12" src={logo1} alt="logo" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataLoader;
