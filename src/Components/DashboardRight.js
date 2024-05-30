import { useMemo } from "react";
import React from "react";
import { useSelector } from "react-redux";

function DashboardRight() {
  const schedules = useSelector((state) => state.Schedule);

  const sortedSchedules = useMemo(() => {
    return schedules.slice().sort((a, b) => {
      const [hourA, minuteA, ampmA] = a.time.split(/:| /);
      const [hourB, minuteB, ampmB] = b.time.split(/:| /);

      if (ampmA !== ampmB) {
        return ampmA === "am" ? -1 : 1;
      } else if (parseInt(hourA) !== parseInt(hourB)) {
        return parseInt(hourA) - parseInt(hourB);
      } else {
        return parseInt(minuteA) - parseInt(minuteB);
      }
    });
  }, [schedules]);

  return (
    <div className="dashboardRight">
      <div className="dashboard-schedule-container">
        {sortedSchedules.map(
          (item) =>
            new Date().toLocaleDateString("en-US", { weekday: "long" }) ===
              item.day && (
              <div
                className={`dashboard-schedule ${
                  new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                  }) !== item.day
                    ? "d-s-notactive"
                    : ""
                }`}
              >
                <div className="dashboard-schedule-decoration">
                  <div className="dashboard-schedule-decoration-line"></div>
                  <div className="dashboard-schedule-decoration-dot"></div>
                  <div className="dashboard-schedule-decoration-line"></div>
                </div>
                <div className="dashboard-schedule-item">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h1>{item.name}</h1>
                    <p>
                      {item.day}, {item.time}
                    </p>
                  </div>
                  <p>{item.batch}</p>
                </div>
              </div>
            )
        )}
        {sortedSchedules.map(
          (item) =>
            new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { weekday: "long" }
            ) === item.day && (
              <div className="dashboard-schedule d-s-notactive">
                <div className="dashboard-schedule-decoration">
                  <div className="dashboard-schedule-decoration-line"></div>
                  <div className="dashboard-schedule-decoration-dot"></div>
                  <div className="dashboard-schedule-decoration-line"></div>
                </div>
                <div className="dashboard-schedule-item">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h1>{item.name}</h1>
                    <p>
                      {item.day}, {item.time}
                    </p>
                  </div>
                  <p>{item.batch}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default DashboardRight;
