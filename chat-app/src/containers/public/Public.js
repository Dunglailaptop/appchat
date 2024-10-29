import React from "react";
import { Outlet } from "react-router-dom";
import {
  silderbarleft as Left,
  silderbarright as Right,
} from "../../components";

const Public = () => {
  return (
    <div className="w-full flex">
      <div className="w-[240px] flex-none border border-blue-500">
        <Left />
      </div>
      <div className="flex-auto border border-red-500">
        <Outlet></Outlet>
      </div>
      <div className="w-[329] flex-none border border-blue-500">
        <Right />
      </div>
    </div>
  );
};

export default Public;
