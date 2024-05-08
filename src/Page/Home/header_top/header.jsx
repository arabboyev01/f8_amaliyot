import React from "react";
import "./header_top.css";
import nav from "./img/place.png";
import tel from "./img/call.png";
import fac from "./img/div.png";
import twi from "./img/div (1).png";
import ink from "./img/div (2).png";

function Header() {
  return (
    <div className="header_top">
      <div className="header_text container">
        <div className="navi">
          <img src={nav} alt="" />
          <p>250 Dundas Street West Suite 305, Mississauga, ON L5B 1J2</p>
        </div>
        <ul className="nav__list">
          <img src={tel} alt="" />
          <h6>(97)234 34 07</h6>
          <img src={fac} alt="" />
          <img src={twi} alt="" />
          <img src={ink} alt="" />
        </ul>
      </div>
    </div>
  );
}

export default Header;
