import React from "react";
import achiles from "./img/oyoq.png";
import ankle from "./img/oyoq-orqasi.png";
import oyoqtagi from "./img/oyoq-tagi.png";
import frame2 from "./img/Frame (1).png";
import frame from "./img/Frame.png";
import oyoq2 from "./img/oyoq2.png";
import oyoq3 from "./img/oyoq3.png";
import oyoq4 from "./img/oyoq4.png";
import oyoq5 from "./img/oyoq5.png";
import oyoq6 from "./img/oyoq6.png";
import oyoq7 from "./img/oyoq7.png";
import "./Foot__cards.css";

function Foot__cards() {
  return (
    <div>
      <div className="boostrap-grid">
        <div className="container">
          <div class="container text-center">
            <div class="row row-cols-3">
              <div class="col foot__col">
                <img className="imgage" src={ankle} alt="" />
                <h4 className="pain-h4">Foot Pain</h4>
                <h3 className="pain-h3">Achilles Tendonitis </h3>
                <p className="pain-p">
                  Inflammation in the tendon of the calf<br></br> muscle, where
                  it attaches to the heel bone.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={achiles} alt="" />
                <h4 className="pain-h4">Foot Pain</h4>
                <h3 className="pain-h3">Ankle Pain/Sprain</h3>
                <p className="pain-p">
                  Excessive twisting motion of the ankle that<br></br> causes
                  pain and discomfort due to stress<br></br> on ankle
                  ligaments/muscles.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoqtagi} alt="" />
                <h4 className="pain-h4">Foot Care</h4>
                <h3 className="pain-h3">Athlete’s Foot</h3>
                <p className="pain-p">
                  A fungal infection of the skin that causes<br></br> redness,
                  itchiness and commonly occurs<br></br> on the bottom of the
                  foot or between the <br></br>toes.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoq2} alt="" />
                <h4 className="pain-h4">Bone Issues</h4>
                <h3 className="pain-h3">Bunions</h3>
                <p className="pain-p">
                  A bony structural change to the big toe that <br /> causes it
                  to bend sideways and creates an <br /> enlarged bump at the
                  1st MPJ joint.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoq3} alt="" />
                <h4 className="pain-h4">Foot Care</h4>
                <h3 className="pain-h3">Calluses</h3>
                <p className="pain-p">
                  The build up of hard skin on the bottom of <br /> the foot,
                  usually due to excessive pressure <br /> in a certain area of
                  the foot.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoq4} alt="" />
                <h4 className="pain-h4">Foot Pain</h4>
                <h3 className="pain-h3">Capsulitis/Foot Joint Pain</h3>
                <p className="pain-p">
                  Overuse injury that affects the ligaments <br /> which forms a
                  capsule around a joint.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoq5} alt="" />
                <h4 className="pain-h4">Bone Issues</h4>
                <h3 className="pain-h3">Claw Toe/Hammer Toe</h3>
                <p className="pain-p">
                  A bony structural change to the toe that <br /> causes it to
                  curl and have a “claw” like <br /> appearance.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoq6} alt="" />
                <h4 className="pain-h4">Pediatrics</h4>
                <h3 className="pain-h3">Club Foot</h3>
                <p className="pain-p">
                  A congenital condition that causes a <br /> structural change
                  in the foot position.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
              <div class="col foot__col">
                <img className="imgage" src={oyoq7} alt="" />
                <h4 className="pain-h4">Foot Care</h4>
                <h3 className="pain-h3">Corns</h3>
                <p className="pain-p">
                  A thickened part of the skin that has a <br /> hardened
                  conical centre that forms <br /> "inward" into the body.
                </p>
                <li className="grid__li">
                  Ko’proq bilish
                  <img className="frame vector" src={frame} alt="" />
                </li>
              </div>
            </div>
          </div>
          <div className="next__div">
            <p className="tort">1/4</p>
            <button className="foot__next_btn">
              <h5>
                Next
                <img
                  style={{ marginLeft: "10px" }}
                  className="frame vector"
                  src={frame2}
                  alt=""
                />
              </h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot__cards;
