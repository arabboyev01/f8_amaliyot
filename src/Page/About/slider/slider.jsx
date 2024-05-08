import React from "react";
import "./slider.css";
import slidrbg from "./img/slider.png";
// Import Swiper styles

function About_slider() {
  return (
    <section className="About_slider container">
      <div className="container slider_wrapper">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slidrbg} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={slidrbg} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={slidrbg} className="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev left_button"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next right_button"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              style={{ color: "blue" }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About_slider;
