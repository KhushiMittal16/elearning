import "./App.css";
import { Routes, Route } from "react-router-dom";
// import MainComp from "./components/MainComp";
import Tutorial from "./components/Tutorial";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AboutUs from "./components/AboutUs";

function App() {
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
    <>
      {/* <Navbar/> */}
      {/* <MainComp /> */}
      <div className="mainData">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="mainComp flex justify-start w-full">
          <div className={className}>
            <Sidebar />
          </div>
          {/* <div className="appData w-3/4"> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
