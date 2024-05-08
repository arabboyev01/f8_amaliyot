import React from "react";
import "./fot.css";
import logo from "./img/Asset 1 1.png";
import rasm from "./img/62038392898a7f47d4603a27_Photography_MFC_HomeSection-p-1600.jpeg.png";
function Fot() {
  return (
    <div className="container">
      <div className="hero__center">
        <div className="hero__img">
          <img className="rasm" src={rasm} alt="" />
          <div className="hero__text">
            <h3 style={{ marginLeft: "-5px" }}>
              The Home of<br></br>
              Foot Care
            </h3>
            <p>
              Med Art klinikasi Farg'onadagi eng yaxshi jarrohlik klinikalaridan
              biridir. 1990-yilda tashkil etilganimizdan beri biz eng mukammal
              jarrohlik operatsiyalarini o’tkazib kelmoqdamiz.
            </p>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fot;
