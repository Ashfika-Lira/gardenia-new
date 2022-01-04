import React from "react";
import Chart from "../Chart/Chart";
import DashboardSummary from "../DashboardSummary";

const AdminDashboard = () => {
  return (
    <div className="main-section">
      <h1> Admin Dashboard</h1>
      <DashboardSummary></DashboardSummary>
      <div className="test-center">
        <Chart></Chart>
      </div>
    </div>
  );
};

export default AdminDashboard;
