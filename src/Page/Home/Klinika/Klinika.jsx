import React from "react";
import "./Klinika.css";
import right from "./img/div (2).png";
function Klinika() {
  return (
    <section className="klinika">
      <div className="klinik__shadow">
        <div className="container">
          <div className="klinik__box" style={{ marginLeft: "-50px" }}>
            <h3 className="klinik_par" style={{ marginLeft: "-1px" }}>
              BIZ HAQIMIZDA
            </h3>
            <h2 className="klinik__title">
              Yuqori darajadagi <br /> klinika
            </h2>
            <p className="klinik__text">
              Med Art klinikasida biz eng zamonaviy asbob- <br />
              uskunalar va davolash usullaridan foydalanamiz, <br /> bu bizni
              davolashda birinchi o'rinda turadi.
            </p>
            <li style={{ color: "#386BEA" }}>
              Ko’proq bilish <img src={right} alt="" />
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Klinika;
