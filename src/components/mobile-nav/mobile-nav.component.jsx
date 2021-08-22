import React, { useState } from "react";
import { Link } from "react-router-dom";
import navIcon from "../../assets/nav.png";
import "./mobile-nav.styles.scss";

export const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mobile-nav">
      <div>
        <img src={navIcon} className="icon" onClick={()=>setShowMenu(!showMenu)} />
      </div>
        {showMenu?
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
      :<div></div>
        }
    </div>
  );
};
