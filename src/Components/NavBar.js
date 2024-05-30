import React, { useState } from "react";
import { NavMenu, logo } from "../Utils/StaticData";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState(1);

  return (
    <div className="Navbar">
      <div className="logo-img-container">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="nav-menu-container">
        {NavMenu.map((item) => (
          <NavLink to={item.path} onClick={()=>setActive(item.id)} key={item.id}>
            <div className={`nav-menu ${active === item.id ? 'nav-menu-active' : ""}`} key={item.id}>
              <img src={item.img} alt="." />
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="nav-footer">
        <h1>Log Out</h1>
      </div>
    </div>
  );
}

export default NavBar;
