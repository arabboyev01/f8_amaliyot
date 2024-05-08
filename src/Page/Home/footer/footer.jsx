import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer__top">
      <div className="container">
        <div className="footer__center">
          <h2>
            Don’t wait<br></br>Your foot issues won’t.
          </h2>
          <p>Book an appointment with one of our certified Chiropodists.</p>
          <button className="book__button">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
