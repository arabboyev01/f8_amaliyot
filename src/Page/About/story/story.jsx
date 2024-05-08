import React from "react";
import "./story.css";
function Story() {
  return (
    <div className="Story">
      <div className="container">
        <div className="story__text">
          <h5>Our Story</h5>
          <h3 style={{ marginLeft: "-5px" }}>
            Welcome to the<br></br> Mississauga Foot<br></br> Clinic
          </h3>
          <p>
            The Mississauga Foot Clinic was founded in 1990<br></br> and was one
            of the very first foot clinics with<br></br> certified chiropodists
            in Ontario. Since then,<br></br> Mississauga Foot Clinic has become
            one of the<br></br> leading specialized clinics in Canada and has
            been<br></br> recognized as a top foot clinic by the college of
            <br></br>
            podiatry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
