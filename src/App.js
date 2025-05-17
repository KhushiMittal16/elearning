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
import GoogleLogin from "./components/GoogleLogin";
import PrivateRoute from "./components/PrivateRoute";
import MainComp from "./components/MainComp";

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
      {/* <div className="navComp w-screen"> */}
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      {/* <MainComp /> */}
      {/* </div> */}
      <Navbar toggleSidebar={toggleSidebar}/>
      <div className="mainComp flex justify-start w-full">
        {/* <GoogleLogin /> */}
        <div className={className}>
          <Sidebar />
        </div>
        {/* <div className="appData w-3/4"> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/tutorial"
            element={
              // <PrivateRoute>
              <Tutorial />
              // </PrivateRoute>
            }
          />
          <Route
            path="/projects"
            element={
              // <PrivateRoute>
              <Project />
              // </PrivateRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              // <PrivateRoute>
              <AboutUs />
              // </PrivateRoute>
            }
          />
          <Route path="/login-page" element={<GoogleLogin />} />
        </Routes>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
