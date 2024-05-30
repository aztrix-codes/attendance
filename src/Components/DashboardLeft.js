import React, { useEffect, useState } from "react";
import Calender from "./Calender";
import { bannerAd } from "../Utils/StaticData";

function DashboardLeft() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeoutVar = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (bannerIndex >= bannerAd.length - 1) {
          setBannerIndex(0);
        } else {
          setBannerIndex((prevIndex) => prevIndex + 1);
        }
        setFadeOut(false);
      }, 500);
    }, 4500);

    return () => clearTimeout(timeoutVar);
  }, [bannerIndex]);

  return (
    <div className="dashboardLeft">
      <div className="greeting-banner" style={{ color: "white" }}>
        <h1>Hello, Khan Arman</h1>
        <p>You got 3 more lecture Scheduled for Today</p>
      </div>
      <div className="banner-ad">
        {bannerAd.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="loading..."
            className={
              index === bannerIndex ? (fadeOut ? "fade-out" : "") : "hidden"
            }
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "4% 0",
          height: "80%",
        }}
      >
        <div className="dashboard-notice">
          <marquee
            behavior="scroll"
            direction="up"
            loop
            style={{ height: "100%", with: "100%" }}
            scrollamount="2"
          >
            <ul>
              <li>notice 1</li>
              <li>notice 2</li>
              <li>notice 3</li>
            </ul>
          </marquee>
        </div>
        <Calender />
      </div>
    </div>
  );
}

export default DashboardLeft;
