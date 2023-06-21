import React from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 h-[100vh] overflow-scroll bg-zinc-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
