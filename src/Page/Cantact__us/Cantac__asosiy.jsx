import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cantactlogo from "./img/Asset 1 1.png";
import { useState } from "react";
import "./Cantact__us.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "700px",
  height: "500px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
};
export default function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("modal"))) {
      setOpen(false);
    } else {
      setTimeout(() => {
        setOpen(true);
      }, 5000);
    }
  }, []);

  function fn() {
    if (input1 && input2) {
      localStorage.setItem("modal", JSON.stringify(input1));
      setOpen(false);
    }
  }
  return (
    <div className="Cantact">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <img src={cantactlogo} alt="" />
            </Typography>
            <h2 className="Cantact__h2">Contact us</h2>
            <p className="Cantact__p">
              Get your name and number for a free consultation, responsible
              persons will<br></br> contact you in 3 minutes.
            </p>
            <h6 className="your__name">Your Name *</h6>
            <input
              onChange={(e) => setInput1(e.target.value)}
              value={input1}
              className="your__input"
              type="text"
              placeholder="Micheal Jordan"
            />
            <h6 className="your__name">Your Number *</h6>
            <input
              onChange={(e) => setInput2(e.target.value)}
              value={input2}
              type="tel"
              className="your__input"
              placeholder="+998 97 234 34 07"
            />
            <span className="Cantac__span">
              <li>Rejection</li>
              <button className="Cantact__button" onClick={fn}>
                Dispatch
              </button>
            </span>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
