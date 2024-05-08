import React from "react";
import "./boglanish.css";
import modongel from "./img/meneg.png";
import nails from "./img/div.png";
function Boglanish() {
  return (
    <div className="container">
      <div className="cont__bag">
        <div className="left__list">
          <ul className="havola__text">
            <li>
              <a href="#">Boshqa havolalar</a>
            </li>
          </ul>
          <div className="left__list_2">
            <h2>Bizning bog'lanishlarimiz</h2>
            <p>
              The Mississauga foot clinic is also the home of one<br></br> of
              Toronto’s best luxury medical nail salons &<br></br>A&E/Youtube
              sensation, The Toe Bro.
            </p>
          </div>
        </div>
        <div className="hovolalar">
          <div className="left_">
            <div className="nails__1">
              <img src={nails} alt="" />
            </div>
            <div className="nails__2">
              <h2>Nails by Toe Bro</h2>
              <p>
                Nails by Toe Bro is Mississauga’s newest and only luxury medical
                Nail salon, offering medical grade manicure, pedicures, nail
                reconstruction and repair .
              </p>
            </div>
          </div>
          <div className="left_">
            <div className="nails__1">
              <img src={modongel} alt="" />
            </div>
            <div className="nails__2">
              <h2>Nails by Toe Bro</h2>
              <p>
                The Toe Bro YouTube channel is the home of all things feet. From
                educational, to absolutely gruesome procedures, The Toe Bro
                YouTube channel has it all.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boglanish
