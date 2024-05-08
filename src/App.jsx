import { Route, Routes } from "react-router-dom";
import "./App.css";
import Asosiy from "./Page/Home/Asosiy/asosiy";
import About__asosiy from "./Page/About/About__asosiy/About__asosiy";
import Headers from "./Page/Home/header/headers";
import Header from "./Page/Home/header_top/header";
import Footer from "./Page/Home/footer/footer";
import Bottom from "./Page/Home/footer__bootom/bottom";
import Treatments from "./Page/Treatments/Treatments/Treatments";
import FooterFeatures from "./Page/Home/footer/FooterFeatures";
import Asosiys from "./Page/Assesment/Assesment__asosiy/asosiy";
import Faq from "./Page/FAQ/Faq__asosiy/Faq";
import Foot__asosiy from "./Page/Foot__cards/Foot__isue/footisu_asosiy";
import Abouy__single__asosiy from "./Page/About__single__page/about__single__asosiy/about__single__asosiy";
import ContactModal from "./Page/Cantact__us/Cantac__asosiy";
import { useEffect } from "react";
import Contact__home from "./Page/Contact/Contact__home";

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Headers />
      <Routes>
        <Route path="/" element={<Asosiy />}></Route>
        <Route path="/about" element={<About__asosiy />}></Route>
        <Route path="/xizmatlar" element={<Treatments />}></Route>
        <Route path="/assesment" element={<Asosiys />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/foot" element={<Foot__asosiy />}></Route>
        <Route
          path="/about__single"
          element={<Abouy__single__asosiy />}
        ></Route>
        {/* <Route path="/cantact" element={<ContactModal />}></Route> */}
        <Route path="/cantact" element={<Contact__home />}></Route>
      </Routes>
      <Footer />
      <FooterFeatures />
      <Bottom />
      <ContactModal />
    </div>
  );
}

export default App;
