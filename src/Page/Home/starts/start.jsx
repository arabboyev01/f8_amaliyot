import React from "react";
import "./start.css";
import aziz from "./img/div (7).png";
import stars from "./img/div (8).png";
import google from "./img/div (10).png";
import start1 from "./img/ACNPEu9NeAFOAOhGp0fYIz6WsChuYlJ4NDqryECbiA5l=s240-c-c0x00000000-cc-rp-mo-ba3-br100.png";
import start2 from "./img/ALm5wu0_uzLMRufKJMprY5raVgjCtELnPR4RcCHesyHL=s240-c-c0x00000000-cc-rp-mo-ba3-br100.png";
import start3 from "./img/ALm5wu2AkbsKoRY-d60mlz6jrUgPa8hMwVq6116MFl7T=s240-c-c0x00000000-cc-rp-mo-br100.png";
function Start() {
  return (
    <div className="card__message">
      <div className="container">
        <div className="card__messega__top">
          <h6>MA'LUMOTNOMALAR</h6>
          <h3 style={{ marginLeft: "-5px" }}>
            Bizning mijozlarimiz<br></br>
            nima deyishadi
          </h3>
        </div>
        <div className="row">
          <div className="col app">
            <div className="card__img">
              <img src={aziz} alt="" style={{ padding: "20px 10px" }} />
              <h3 className="name">Rukhsana Aziz</h3>
            </div>
            <div className="good" style={{ marginRight: "50px" }}>
              <img src={stars} alt="" />
              <h4 className="year" style={{ marginTop: "7px" }}>
                7 days ago
              </h4>
            </div>
            <p className="very">
              Very professional and nice<br></br> people.
            </p>
            <img className="google__img" src={google} alt="" />
          </div>
          <div className="col app" style={{ height: "240px" }}>
            <div className="card__img">
              <img src={start1} alt="" style={{ padding: "20px 10px" }} />

              <h3 className="name">LAMA AL</h3>
            </div>
            <div className="good" style={{ marginRight: "50px" }}>
              <img src={stars} alt="" />
              <h4 className="year" style={{ marginTop: "7px" }}>
                7 days ago
              </h4>
            </div>
            <p className="very">
              Dr. Matthew is very professional and experienced, I had to drain
              some blood from my Toe Nail;<br></br>
              <span>
                <a href="#">Read more</a>
              </span>
            </p>
            <img className="google__img" src={google} alt="" />
          </div>
          <div className="col app" style={{ height: "240px" }}>
            <div className="card__img">
              <img src={start2} alt="" style={{ padding: "20px 10px" }} />

              <h3 className="name">Haris Khan (H0W1K2)</h3>
            </div>
            <div className="good" style={{ marginRight: "50px" }}>
              <img src={stars} alt="" />
              <h4 className="year" style={{ marginTop: "7px" }}>
                7 days ago
              </h4>
            </div>
            <p className="very">
              All around great experience, the moment I arrived till I left,
              everyone made me feel<br></br>
              <span>
                <a href="#">Read more</a>
              </span>
            </p>
            <img className="google__img" src={google} alt="" />
          </div>
          <div className="col app" style={{ height: "240px" }}>
            <div className="card__img">
              <img src={start3} alt="" style={{ padding: "20px 10px" }} />

              <h3 className="name">E D</h3>
            </div>
            <div className="good" style={{ marginRight: "50px" }}>
              <img src={stars} alt="" />
              <h4 className="year" style={{ marginTop: "7px" }}>
                7 days ago
              </h4>
            </div>
            <p className="very">
              Mathew is a very knowledgeable-professional foot specialist, I
              really<br></br>
              <span>
                <a href="#">Read more</a>
              </span>
            </p>
            <img className="google__img" src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
