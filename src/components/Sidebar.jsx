import React from "react";
import { NavLink } from "react-router-dom";
import withUser from "../hocs/withUser";
import { LuLayoutDashboard } from "../../node_modules/react-icons/lu";
import {
  BsFillBarChartFill,
  BsFillPeopleFill,
  BsCardText,
} from "../../node_modules/react-icons/bs";
import { IoBagHandleSharp } from "../../node_modules/react-icons/io5";
import logo from "../../src/assets/logo.jpg";
const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-around text-[rgb(243,195,0)] font-bold text-xl">
        <img className=" w-20" src={logo} alt="" />
        <p>NOVA X</p>
      </div>

      <div className="flex flex-col gap-2 text-lg font-black text-gray-500">
        <NavLink className="py-3 px-4 flex items-center gap-3 bg-[rgb(243,195,0)] text-white duration-300 mx-5 rounded-lg transition">
          <LuLayoutDashboard />
          Dashboard
        </NavLink>
        <NavLink className="py-3 px-4 flex items-center gap-3 hover:bg-[rgb(243,195,0)] hover:text-white duration-300 mx-5 rounded-lg transition">
          <BsFillBarChartFill />
          Statiistics
        </NavLink>
        <NavLink className="py-3 px-4 flex items-center gap-3 hover:bg-[rgb(243,195,0)] hover:text-white duration-300 mx-5 rounded-lg transition">
          <IoBagHandleSharp />
          Products
        </NavLink>
        <NavLink className="py-3 px-4 flex items-center gap-3 hover:bg-[rgb(243,195,0)] hover:text-white duration-300 mx-5 rounded-lg transition">
          <BsFillPeopleFill />
          Customer
        </NavLink>
        <NavLink className="py-3 px-4 flex items-center gap-3 hover:bg-[rgb(243,195,0)] hover:text-white duration-300 mx-5 rounded-lg transition">
          <BsCardText />
          Messages
        </NavLink>
      </div>
    </div>
  );
};

export default withUser(Sidebar);
