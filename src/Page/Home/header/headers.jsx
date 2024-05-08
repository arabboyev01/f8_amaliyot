import React from "react";
import logo from "./img/Asset 1 1.png";
import "./headers.css";
import { Link } from "react-router-dom";

function Headers() {
  function checkLength(e) {
    var maxLength = 9;
    var inputValue = e.target.value;
    if (inputValue.length > maxLength) {
      e.target.value = inputValue.slice(0, maxLength);
    }
  }
  // localStorage.setItem('modal', true)
  return (
    <div>
      <header>
        <div className="header__text container">
          <nav>
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="inner">
              <li>
                <Link to={"/xizmatlar"}>Xizmatlar</Link>
              </li>
              <li>
                <Link to={"/foot"}>Muammolar</Link>
              </li>
              <li>
                <Link to={"/about"}>Biz haqimizda</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/cantact"}>Aloqa</Link>
              </li>
              <button
                className="btn btn-primary uchrashuv__buton"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Uchrashuv brom qilish
              </button>

              <div
                className="offcanvas offcanvas-end"
                style={{ width: "777px", background: "#3585F9" }}
                id="offcanvasRight"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <h3 className="offcanvas__h3">Sign up for an appointment</h3>
                  <p className="offcanvas__p">
                    It just takes few minutes to sign up and get fast,<br></br>
                    easy access to care, 24/7. No need for your<br></br>
                    insurance card yet
                  </p>
                  <div className="buuttons">
                    <div
                      className="btn-group"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <div
                        className="slelect"
                        style={{
                          display: "flex",
                          gap: "20px",
                          marginTop: "-20px",
                          marginLeft: "-20px",
                        }}
                      >
                        <div className="header__select">
                          <select className="custom-select mb-3">
                            <option selected>Choose a department</option>
                            <option value="1">.......</option>
                            <option value="2">.......</option>
                          </select>
                          <select className="custom-select mb-3">
                            <option value="0">Choose a doctor</option>
                            <option value="1">........</option>
                            <option value="2">........</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="good">
                      <div className="card__1 ">
                        <input type="text" placeholder="YOUR NAME" />
                        <input
                          style={{ marginTop: "30px" }}
                          type="email"
                          placeholder="YOUR EMAIL"
                        />
                      </div>
                      <div className="card__2">
                        <input
                          type="number"
                          placeholder="PHONE"
                          onInput={(e) => checkLength(e)}
                        />
                        <input
                          type="number"
                          className="date"
                          style={{ marginTop: "30px" }}
                          placeholder="08/27/2022"
                        />
                      </div>
                    </div>
                    <div className="buuton">
                      <button className="buttooon">MAKE AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Headers;
