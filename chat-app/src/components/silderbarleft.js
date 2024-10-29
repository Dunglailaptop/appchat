import React from "react";
import logo from "../assets/Red Simple Medical Health Logo.png";

const silderbarleft = () => {
  return (
    <div>
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[120px] object-contain"></img>
      </div>
    </div>
  );
};

export default silderbarleft;
