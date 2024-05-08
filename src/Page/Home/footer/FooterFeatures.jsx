import "./footer.css";
import logos from "./img/Asset 1 1.png";

const FooterFeatures = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__centers">
          <div className="row row__up">
            <div className="col">
              <img src={logos} alt="" />
              <p className="footer__p">
                250 Dundas Street West Suite 305 Mississauga, ON L5B 1J2
              </p>
            </div>
            <div className="col">
              <h4 className="footer__h4">The Clinic</h4>
              <h5>Treatments</h5>
              <h5>TIssues</h5>
              <h5>About Us</h5>
              <h5>FAQ</h5>
              <h5>Contact</h5>
            </div>
            <div className="col">
              <h4 className="footer__h4">Chiropodist</h4>
              <h5>Jonathan Tomines</h5>
              <h5>Julie Thayilchira</h5>
              <h5>Maryam Zarazvand</h5>
              <h5>Matthew Shestalo</h5>
              <h5>Varun Patel</h5>
            </div>
            <div className="col">
              <h4 className="footer__h4">Treatments</h4>
              <h5>Assessment</h5>
              <h5>Cyst / Bump</h5>
              <h5>General Foot Care</h5>
              <h5>Injection</h5>
              <h5>Laser / Microwave</h5>
              <h5>Nail Correction</h5>
              <h5>Orthotic</h5>
              <h5>Surgical</h5>
              <h5>Topical</h5>
            </div>
          </div>
          <div className="row row__down">
            <div className="col">
              <h4 className="footer__h4">Business Hours</h4>
              <h5>Monday: 9:30am-6:30pm</h5>
              <h5>Tuesday: 9:30am-6:30pm</h5>
              <h5>Wednesday: 9:30am-6:30pm</h5>
              <h5>Thursday: 9:30am-6:30pm</h5>
              <h5>Friday: 9:30am-6:30pm</h5>
              <h5>Saturday: 9:30am-5:00pm</h5>
              <h5>Sunday: Closed</h5>
            </div>
            <div className="col">
              <h4 className="footer__h4">Foot Issues</h4>
              <h5>Achilles Tendonitis</h5>
              <h5>Bunions</h5>
              <h5>Claw Toe/Hammer Toe</h5>
              <h5>Damaged Toenails</h5>
              <h5>Fungal Toenails</h5>
              <h5>Heel Pain</h5>
              <h5>In Toe/Out Toe Gait</h5>
              <h5>Mucoid Cyst</h5>
              <h5>Plantar Fibroma</h5>
              <h5>Shin Splints/Leg Pain</h5>
              <h5>Turf Toe</h5>
            </div>
            <div className="col col__down">
              <h5>Ankle Pain/Sprain</h5>
              <h5>Calluses</h5>
              <h5>Club Foot</h5>
              <h5>Diabetic Foot Care</h5>
              <h5>Ganglion Cyst</h5>
              <h5>Heel Spurs</h5>
              <h5>Ingrown Toenails</h5>
              <h5>Neuroma</h5>
              <h5>Plantar Warts</h5>
              <h5>Thickened Toenails</h5>
              <h5>Varicose Veins/Edema</h5>
            </div>
            <div className="col col__down">
              <h5>Athlete’s Foot</h5>
              <h5>Capsulitis/Foot Joint Pain</h5>
              <h5>Corns</h5>
              <h5>Flat Feet</h5>
              <h5>Hallux Rigidus/Limitus</h5>
              <h5>High Archess</h5>
              <h5>Metatarsalgia</h5>
              <h5>Pediatric Flat Feet</h5>
              <h5>Routine Foot Care</h5>
              <h5>Toe Walking</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFeatures;
