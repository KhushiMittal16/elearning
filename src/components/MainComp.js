import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Tutorial from "./Tutorial";

const MainComp = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  // const sidebar = true;
  const className = `w-1/4 border h-screen sticky top-0 ${
    sidebar ? "block" : "hidden"
  }`;
  return (
    <div className="mainData">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="mainComp flex justify-start w-full">
        <div className={className}> 
          <Sidebar />
        </div>
        <div className="appData w-3/4">
          {/* <Tutorial /> */}
          {/* <div>Hey</div> */}
        </div>
      </div>
    </div>
  );
};

export default MainComp;
