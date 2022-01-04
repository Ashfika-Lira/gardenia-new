import React from "react";
import Chart from "../Chart/Chart";
import UserDashboardSummary from "./UserDashboardSummary";

const UserDashboard = () => {
  return (
    <div className="mx-auto">
      <h1> User Dashboard</h1>
      <UserDashboardSummary></UserDashboardSummary>
      <Chart></Chart>
    </div>
  );
};

export default UserDashboard;
