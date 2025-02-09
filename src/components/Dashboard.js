import React from "react";
import Card from "./Card";
import { logo } from "../assets/images";

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
  return (
    <div>
      <Card CardData={DashboardData} isDashboard={true} />
    </div>
  );
};

export default Dashboard;
