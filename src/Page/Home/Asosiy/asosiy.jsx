import React from "react";
import Hero from "../Hero/Hero";
import Fot from "../Foot/fot";
import Xizmatlar from "../xizmatlar/Xizmatlar";
import Start from "../starts/start";
import Klinika from "../Klinika/Klinika";
import Boglanish from "../../About/bog'lanish/boglanish";
import Mutaxasislar from "../Mutaxasislar/Mutaxasislar";

function Asosiy() {
  return (
    <div className="Asosiy">
      <Hero />
      <Fot />
      <Xizmatlar />
      <Klinika />
      <Mutaxasislar />
      <Start />
      <Boglanish />
    </div>
  );
}

export default Asosiy;
