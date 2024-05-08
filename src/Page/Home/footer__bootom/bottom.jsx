import React from "react";
import "./bottom.css";
function Bottom() {
  return (
    <div className="footer__bottom">
      <div className="container">
        <div className="footer__bottom__center">
          <button className="footer__bottom__button btn1">
            <i className="fa-solid fa-phone"></i>(97) 234 34 07
          </button>
          <ul className="icon__brands">
            <li className="icon__brand">
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li className="icon__brand">
              <i className="fa-brands fa-linkedin"></i>{" "}
            </li>
            <li className="icon__brand">
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
        <hr style={{ marginTop: "20px", color: "white" }}></hr>
        <div className="footer__year">
          <h3>Copyright 2022 ©Med Art group. All Rights Reserved.</h3>
          <ul className="footer__year__list">
            <li style={{ color: "white" }}>Privacy Policy</li>
            <li style={{ color: "white" }}>Terms & Conditions</li>
            <li style={{ color: "white" }}>Made with ❤️ by UIL Agency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
