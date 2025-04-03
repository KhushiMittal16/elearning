import React, { useState } from "react";
import Card from "./Card";
import { logo } from "../assets/images";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import Navbar from "./Navbar";

const DashboardData = [
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Tutorials",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Projects",
  },
];

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };
  return (
    <>
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      <div>
        <Card CardData={DashboardData} isDashboard={true} />
        {user?.name}
      </div>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
