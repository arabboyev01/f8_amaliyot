import React from "react";
import "./test2.css";
import doc from "./img/div.jpg";
import dor from "./img/div (1).jpg";
import cloc from "./img/div (2).jpg";
function Test2() {
  return (
    <div>
      <div className="assesment__box">
        <div className="container">
          <div className="row">
            <div className="col colos">
              <h4 className="test3__h4">Diabetic Foot Assessment</h4>
              <div className="row">
                <div className="col-6">
                  <img src={doc} alt="" /> <span>Treatment Description</span>
                  <p>
                    An overall assessment to determine how healthy or how at
                    risk are<br></br> the diabetic patient’s feet. A
                    dermatological, vascular, neurological, <br></br>and
                    musculoskeletal assessment will be performed.
                  </p>
                  <h4 className="colors-4">Related foot issue pages:</h4>
                  <button className="colos-button btn btn-outline-primary">
                    Diabetic Foot Care
                  </button>
                </div>
                <div className="col-3">
                  <img src={dor} alt="" />
                  <span>What It Treats</span>
                  <p>
                    Determines overall foot health <br></br>of a diabetic
                    patient.
                  </p>
                </div>
                <div className="col-2">
                  <img src={cloc} alt="" />
                  <span>Duration</span>
                  <p>30mins.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col colos">
              <h4 className="test3__h4">Children’s Foot Assessment</h4>
              <div className="row">
                <div className="col-7">
                  <img src={doc} alt="" /> <span>Treatment Description</span>
                  <p>
                    An overall assessment to determine how healthy or how at
                    risk are the diabetic patient’s feet. A dermatological,
                    vascular, neurological, and musculoskeletal assessment will
                    be performed.
                  </p>
                  <h4 className="colors-4">Related foot issue pages:</h4>
                  <div className="colos__button">
                    <button className="btn btn-outline-primary">
                      In Toe/Out Toe Gait
                    </button>
                    <button className="btn btn-outline-primary">
                      Toe Walking
                    </button>
                    <button className="btn btn-outline-primary">
                      Club Foot
                    </button>
                    <button className="btn btn-outline-primary">
                      Pediatric Flat Feet
                    </button>
                  </div>
                </div>
                <div className="col-3">
                  <img src={dor} alt="" />
                  <span>What It Treats</span>
                  <p>Overall foot health.</p>
                </div>
                <div className="col-2">
                  <img src={cloc} alt="" />
                  <span>Duration</span>
                  <p>30mins.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col colos">
              <h4 className="test3__h4">General Foot Assessment</h4>
              <div className="row">
                <div className="col-7">
                  <img src={doc} alt="" /> <span>Treatment Description</span>
                  <p>
                    An overall assessment to determine how healthy or how at
                    risk are the diabetic patient’s feet. A dermatological,
                    vascular, neurological, and musculoskeletal assessment will
                    be performed.
                  </p>
                  <h4 className="colors-4">Related foot issue pages:</h4>
                  <div className="colos__button">
                    <button className="colos-button btn btn-outline-primary">
                      Routine Foot Care
                    </button>
                    <button className="colos-button btn btn-outline-primary">
                      Flat Feet
                    </button>
                    <button className="colos-button btn btn-outline-primary">
                      Ankle Pain/Sprain
                    </button>
                    <button className="colos-button btn btn-outline-primary">
                      Athlete’s Foot
                    </button>
                  </div>
                </div>
                <div className="col-3">
                  <img src={dor} alt="" />
                  <span>What It Treats</span>
                  <p>Overall foot health assessment.</p>
                </div>
                <div className="col-2">
                  <img src={cloc} alt="" />
                  <span>Duration</span>
                  <p>30mins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test2;
