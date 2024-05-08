import React from "react";
import "./Xizmatlar.css";
import { Link } from "react-router-dom";
function Xizmatlar() {
  return (
    <section className="Servic">
      <div className="container servic">
        <div className="xizmatlar">
          <div className="xizmatlar__text">
            <h5>Treatments</h5>
            <h3 style={{ marginLeft: "-5px" }}>What we treat</h3>
            <p>
              From ingrown toenails to foot pain, we’ve<br></br> developed
              treatments and procedures using state<br></br> of the art
              technology and tools, resulting in high<br></br> success rates.
              See our treatments.
            </p>
          </div>
        </div>
        <div className="servis__sort">
          <div className="sort__box1">
            <Link to={"/assesment"} style={{ color: "#000" }}>
              <p className="box__title">Assessment</p>
              <p className="box__par">
                General foot health <br /> assessments.
              </p>
            </Link>
          </div>
          <div className="sort__box2">
            <p className="box__title">Cyst / Bump</p>
            <p className="box__par">
              Cyst, bump and bunion removal <br /> treatments.
            </p>
          </div>
          <div className="sort__box3">
            <p className="box__title">General Foot Care</p>
            <p className="box__par">
              General foot care for corn, <br /> diabetic, hard toenail and
              more.
            </p>
          </div>
          <div className="sort__box4">
            <p className="box__title">Injection</p>
            <p className="box__par">
              Cortisone and alcohol injection
              <br /> for pain and morton’s neuroma.
            </p>
          </div>
          <div className="sort__box5">
            <p className="box__title">Laser / Microwave</p>
            <p className="box__par">
              Laser/microwave treatments <br /> for warts and foot pain.
            </p>
          </div>
          <div className="sort__box6">
            <p className="box__title">Nail Correction</p>
            <p className="box__par">
              Non-surgical nail correction <br />
              systemfor ingrown toenails.
            </p>
          </div>
          <div className="sort__box7">
            <p className="box__title">Orthotic</p>
            <p className="box__par">
              Custom patient orthotic, based <br /> on patient needs.
            </p>
          </div>
          <div className="sort__box8">
            <p className="box__title">Surgical</p>
            <p className="box__par">
              Surgical removal treatment for<br></br> warts, nails and more.
            </p>
          </div>
          <div className="sort__box9">
            <p className="box__title">Topical</p>
            <p className="box__par">
              Topical treatments for various<br></br> nail, skin and foot
              issues..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Xizmatlar;
