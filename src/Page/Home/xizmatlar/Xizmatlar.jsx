import React from "react";
import "./Xizmatlar.css";
import { Link } from "react-router-dom";
function Xizmatlar() {
  return (
    <section className="Servic">
      <div className="container servic">
        <div className="xizmatlar">
          <div className="xizmatlar__text">
            <h5>Muolajalar</h5>
            <h3 style={{ marginLeft: "-5px" }}>Bizning xizmatlar</h3>
            <p>
              Oddiyidan tortib to mukammal operatsiyagacha, biz eng<br></br>{" "}
              zamonaviy texnologiya va vositalardan foydalangan holda<br></br>{" "}
              davolash usullari va muolajalarini ishlab chiqdik, natijada
              <br></br> muvaffaqiyat yuqori. Bizning muolajalarimizni ko'ring.
            </p>
          </div>
        </div>
        <div className="servis__sort">
          <div className="sort__box1">
            <Link to={"/assesment"} style={{ color: "#000" }}>
              <p className="box__title">Urologiya</p>
              <p className="box__par">
                General foot health <br /> assessments.
              </p>
            </Link>
          </div>
          <div className="sort__box2">
            <p className="box__title">Ginekologiya</p>
            <p className="box__par">
              Cyst, bump and bunion removal <br /> treatments.
            </p>
          </div>
          <div className="sort__box3">
            <p className="box__title">Travmatologiya</p>
            <p className="box__par">
              General foot care for corn, <br /> diabetic, hard toenail and
              more.
            </p>
          </div>
          <div className="sort__box4">
            <p className="box__title">Bolalar Urologiya</p>
            <p className="box__par">
              Cortisone and alcohol injection
              <br /> for pain and morton’s neuroma.
            </p>
          </div>
          <div className="sort__box5">
            <p className="box__title">Otorinolaringolog</p>
            <p className="box__par">
              Laser/microwave treatments <br /> for warts and foot pain.
            </p>
          </div>
          <div className="sort__box6">
            <p className="box__title">MRT</p>
            <p className="box__par">
              Non-surgical nail correction <br />
              systemfor ingrown toenails.
            </p>
          </div>
          <div className="sort__box7">
            <p className="box__title">Xirurgiya</p>
            <p className="box__par">
              Custom patient orthotic, based <br /> on patient needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Xizmatlar;
