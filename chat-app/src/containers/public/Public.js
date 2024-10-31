import React from "react";
import { Outlet } from "react-router-dom";
import {
  silderbarleft as Left,
  silderbarright as Right,
} from "../../components";

const Public = () => {
  return (
    <div className="w-full flex overflow-hidden">
      <div className="w-[240px] flex-none bg-white border-r-indigo-600">
        <Left />
      </div>
      <div className="w-[960px] flex-auto bg-gray-50 min-h-screen">
        <Outlet></Outlet>
      </div>
  
    </div>
  );
};

export default Public;
