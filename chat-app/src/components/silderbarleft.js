import React from "react";
import logo from "../assets/Red Simple Medical Health Logo.png";
import { siderbarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";
import "flowbite";
import ModalLogout from "../containers/ModalDialog/ModalLogout";


const noneactive = "py-2 px-[25px] font-bold text-[#32323D] text-[13px] flex gap-[12px] items-center"
const activestyle = "py-2 px-[25px] font-bold text-[#0F7070] border text-[13px] flex gap-[12px] items-center"

const silderbarleft = () => {
  return (
    <>
    <div className="flex flex-col">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[120px] object-contain"></img>
      </div>
      <div className="flex flex-col">
        {siderbarMenu.map(item => (
          <NavLink to={item.path} key={item.path} end={item.end} className={({isActive}) => isActive ? activestyle: noneactive}>{item.icons}<span>{item.text}</span></NavLink>
        ))}
        <div className="flex justify-evenly">
          <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"  className="w-[200px] m-5 rounded transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#ffff]">Đăng xuất</button>
        </div>
      </div>
    </div>
    <ModalLogout></ModalLogout>
    </>
  );
};

export default silderbarleft;
