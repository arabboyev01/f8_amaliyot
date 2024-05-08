import React from "react";
import "./team.css";
import vector from "./img/div (16).png";
import maryam from "./img/div (13).png";
import mathem from "./img/div (14).png";
import varun from "./img/div (15).png";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div>
      <div className="team">
        <div className="container">
          <div className="team__text">
            <h5 className="cantact_h5s">THE TEAM</h5>
            <div className="row row__cantact">
              <div className="col-4 muta__cols">
                <img src={maryam} alt="" />
                <span>
                  <h4>Jonathan Tomines</h4>
                  <h5>
                    Owner | Chiropodist, also<br></br> known as “The Toe Bro”..
                  </h5>
                  <Link to={"/about__single"}>
                    <li>
                      View full bio{" "}
                      <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                    </li>
                  </Link>
                </span>
              </div>
              <div className="col-4 muta__cols ">
                <img src={mathem} alt="" />
                <span>
                  <h4>Jonathan Tomines</h4>
                  <h5>
                    Owner | Chiropodist, also<br></br> known as “The Toe Bro”..
                  </h5>
                  <Link to={"/about__single"}>
                    <li>
                      View full bio{" "}
                      <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                    </li>
                  </Link>
                </span>
              </div>
              <div className="col-4 muta__cols">
                <img src={varun} alt="" />
                <span>
                  <h4>Jonathan Tomines</h4>
                  <h5>
                    Owner | Chiropodist, also<br></br> known as “The Toe Bro”..
                  </h5>
                  <Link to={"/about__single"}>
                    <li>
                      View full bio{" "}
                      <img style={{ marginLeft: "5px" }} src={vector} alt="" />
                    </li>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
