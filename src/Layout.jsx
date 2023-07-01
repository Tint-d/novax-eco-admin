import React from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-[100vw]">
      <div className="w-2/12 border-r-[15px]">
        <Sidebar />
      </div>
      <div className="w-10/12 h-[100vh] overflow-scroll bg-gray-200 relative">
        {children}
      </div>
    </div>
  );
};

export default Layout;
