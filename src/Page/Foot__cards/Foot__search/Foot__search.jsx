import React from "react";
import "./Foot__search.css";
function Foot__search() {
  return (
    <div>
      <div className="foot__serach">
        <div className="container">
          <div className="row">
            <div className="col-2 foot__col__button">
              <button type="button" class="btn btn-outline-primary cod-1">
                Foot Care
              </button>
            </div>
            <div className="col-2 foot__col__button">
              <button type="button" class="btn btn-outline-primary cod-2">
                Soft Tissue Issue
              </button>
            </div>
            <div className="col-2 foot__col__button">
              <button type="button" class="btn btn-outline-primary cod-3">
                Pediatrics
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-2 foot__col__button">
              <button type="button" class="btn btn-outline-primary cod-4">
                Foot Pain
              </button>
            </div>
            <div className="col-2 foot__col__button">
              <button type="button" class="btn btn-outline-primary cod-5">
                Bone Issues
              </button>
            </div>
          </div>
          <div className="foot__input">
            <input className="foot__inp" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot__search;
