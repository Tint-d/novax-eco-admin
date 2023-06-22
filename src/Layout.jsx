import React from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-10/12 h-[100vh] overflow-scroll bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
