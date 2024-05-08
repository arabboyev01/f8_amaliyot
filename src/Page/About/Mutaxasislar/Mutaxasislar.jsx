import React from "react";
import "./Mutaxasislar.css";
import minikal from "./img/div (2).png";
import julie from "./img/div (12).png";
import maryam from "./img/div (13).png";
import mathem from "./img/div (14).png";
import varun from "./img/div (15).png";
import vector from "./img/div (16).png";

function Mutaxasislar() {
  return (
    <div>
      <div className="mutaxasis">
        <div className="container">
          <div className="mutaxasis__text">
            <h5>Xodimlar</h5>
            <h4>
              Bizning<br></br> mutaxassislarimiz.
            </h4>
            <p>
              Bizning shifokorlar o’z sohasida etakchi bo'lib,<br></br>{" "}
              O’zbekiston va Osiyo bo'ylab bemorlarn<br></br> davolashdi.
            </p>
          </div>
          <div className="muta__dspl">
            <div className="row muta__row">
              <div className="col-6 muta__col">
                <img src={minikal} alt="" />
                <span>
                  <h4>Jonathan Tomines</h4>
                  <h5>
                    Owner | Chiropodist, also<br></br> known as “The Toe Bro”..
                  </h5>
                  <li>
                    View full bio{" "}
                    <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                  </li>
                </span>
              </div>
              <div className="col-6 muta__col">
                <img src={julie} alt="" />
                <span>
                  <h4>Julie Thayilchira</h4>
                  <h5>
                    Chiropodist since 2020 | Julie<br></br> is a Registered..
                  </h5>
                  <li>
                    View full bio{" "}
                    <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                  </li>
                </span>
              </div>
            </div>
            <div className="row muta__row">
              <div className="col-6 muta__col">
                <img src={maryam} alt="" />
                <span>
                  <h4>Maryam Zarazvand</h4>
                  <h5>
                    Chiropodist since 2018 |<br></br> Maryam is a Registered..
                  </h5>
                  <li>
                    View full bio{" "}
                    <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                  </li>
                </span>
              </div>
              <div className="col-6 muta__col">
                <img src={mathem} alt="" />
                <span>
                  <h4>Matthew Shestalo</h4>
                  <h5>
                    Chiropodist since 2015 | After<br></br> practicing as a..
                  </h5>
                  <li>
                    View full bio{" "}
                    <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                  </li>
                </span>
              </div>
            </div>
            <div className="row muta__row">
              <div className="col-6 muta__col">
                <img src={varun} alt="" />
                <span>
                  <h4>Varun Patel</h4>
                  <h5>
                    Chiropodist since 2021 |<br></br> Varun has received his..
                  </h5>
                  <li>
                    View full bio{" "}
                    <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                  </li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mutaxasislar
