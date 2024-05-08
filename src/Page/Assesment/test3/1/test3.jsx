import React from "react";
import asses__img from "./img/div (6).png";
import "./style.css";
function Test3() {
  return (
    <div>
      <div className="assessment">
        <div className="container">
          <div className="assessment__text">
            <h4>Treatments</h4>
            <h3 style={{ marginLeft: "-5px" }}>
              Assessment{" "}
              <span>
                <img src={asses__img} alt="" />
              </span>
            </h3>
            <p>
              One of the most important roles for a foot specialist is their
              ability to perform a thorough assessment of their patient to
              determine what may be causing the foot complaint and how to
              develop the proper treatment plan.
            </p>
            <p>
              Your assessment will involve the foot specialist analyzing the
              dermatological, vascular, neurological and musculoskeletal aspects
              of your foot. Based on their assessment findings, along with a
              detailed history of your foot complaint, the foot specialist will
              be able to create a unique patient centred treatment plan for you.
              If you have a foot complaint, you don’t have to suffer all on your
              own. Please go visit a foot specialist to get professional advice
              and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test3;
