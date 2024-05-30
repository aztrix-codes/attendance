import React from "react";
import DashboardRight from "./DashboardRight";
import DashboardLeft from "./DashboardLeft";

function Dashboard() {
  return (
    <div
      className="body-container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
}

export default Dashboard;
