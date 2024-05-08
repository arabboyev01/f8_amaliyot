import React from "react";
import vediokal from "./img/div (7).png";
import "./aboutvedios.css";
function About__single() {
  return (
    <div>
      <div className="about__singles">
        <div className="container">
          <div className="about__singles__text">
            <h5>About</h5>
            <h4>
              Get to know
              <br />
              your chiropodist
            </h4>
            <div className="about__singles__img">
              <img src={vediokal} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About__single;
