import React from "react";
import "./Faq_texts.css";
function Faq_texts() {
  return (
    <div className="faq__texts">
      <div className="container">
        <div className="texts_title">
          <p className="texts__faq">FAQ</p>
          <h4 className="have">
            Have any <br />
            questions?
          </h4>
        </div>
        <div className="btn__group">
          <button className="btn btn-outline-primary faq__button">
            General
          </button>
          <button className="btn btn-outline-primary faq__button">
            Insurance
          </button>
          <button className="btn btn-outline-primary faq__button">
            Appointment
          </button>
        </div>
        <div className="row faq__row">
          <div className="col">
            <h4>Are your clinic services covered by OHIP?</h4>
            <p>
              No, our services are not covered by OHIP but may be covered
              through your private health insurance plan.
            </p>
          </div>
          <div className="col">
            <h4>Does this clinic provide direct billing to my insurance?</h4>
            <p>
              Our clinic does not offer direct billing to your insurance
              company. Services are paid for at the end of the appointment and a
              detailed receipt will given with all the information needed by
              your private insurance company.
            </p>
          </div>
        </div>
        <div className="row faq__row">
          <div className="col">
            <h4>How can I book an appointment?</h4>
            <p>
              Feel free to call our office at 905-848-2929 and our friendly
              front desk staff will be there to answer any questions you may
              have and book your appointment. We also have our online booking
              system where you have full access to the schedules of all our foot
              specialists. It is a great way to book an appointment that suits
              your availability at any time of the day, 24/7.
            </p>
          </div>
          <div className="col">
            <h4>How do I know what my insurance coverage is?</h4>
            <p>
              Please call your insurance company and inquiry about your coverage
              for Chiropody/Podiatry services. If you are interested in custom
              orthotics, coverage is usually a separate category from
              Chiropody/Podiatry services.
            </p>
          </div>
        </div>
        <div className="row faq__row">
          <div className="col">
            <h4>How do I know which appointment type to book online?</h4>
            <p>
              If it your first time at our clinic, please select the ‘Initial
              Consultation’ appointment. This will automatically send you a new
              patient intake form to complete before you arrive for your
              appointment.
            </p>
            <p>
              If you have been to our clinic before as a patient, please select
              the ‘Foot Care’ appointment.
            </p>
            <p>
              If you believe you may be needing a surgical procedure or possibly
              require a longer appointment, please call the office to speak with
              our staff to determine the appropriate appointment for you.
            </p>
          </div>
          <div className="col">
            <h4>I have never been to a foot specialist. What will happen?</h4>
            <p>
              Your appointment will begin by your foot specialist asking you
              questions about your foot complaint in order to gain a better
              understanding of your foot issue. This will be followed by an
              overall foot health assessment to determine the current state of
              the foot issue. After the patient history and physical assessment,
              the foot specialist will educate you on what is occurring with
              your feet and help create a unique treatment plan to resolve the
              foot issue. All options will be discussed as well as the pricing
              and timeline of the treatment options.
            </p>
          </div>
        </div>
        <div className="row faq__row">
          <div className="col">
            <h4>
              What is the difference between a Chiropodist and a Podiatrist?
            </h4>
            <p>
              The main difference between a Chiropodist and Podiatrist is the
              amount of schooling received and the scope of surgical surgeries.
              Podiatry is a 4 year post-graduate program plus a 2-4 year
              surgical residency vs Chiropody which is a 3 year post-graduate
              program. Podiatrists are able to perform bone surgeries such as
              bunion/claw toe correction or ankle reconstruction vs Chiropodists
              which can only perform soft tissue surgeries such as ingrown
              toenail/wart surgical removal.
            </p>
            <p>
              Ontario has followed the Chiropody model since 1991. Since this
              date, there have not been any new podiatrists registered in
              Ontario. If a Podiatrist comes to Ontario to practice,
              unfortunately they will have to register as a Chiropodist and be
              unable to perform bone surgeries.
            </p>
          </div>
          <div className="col">
            <h4>What will it cost?</h4>
            <p>
              Your first initial consultation is $80, which includes an
              assessment and basic foot care treatment. If any further treatment
              needed, the foot specialist will discuss with you the cost of the
              treatment.
            </p>
          </div>
        </div>
        <div className="row faq__row">
          <div className="col">
            <h4>Where are you located?</h4>
            <p>
              Our address is 250 Dundas St W Unit 305. We are located at the
              corner of Parkerhill and Dundas St W. The main intersection is
              Confederation and Dundas St W.
            </p>
            <p>
              There is free parking located behind the building, as well as 2nd
              floor parking located by following the ramp on the left side of
              the parking lot.
            </p>
          </div>
          <div className="col">
            <h4>Where is the lobby entrance?</h4>
            <p>
              The lobby entrance is located behind the building, where the main
              parking lot is. There is no access from Dundas Street sidewalk.
            </p>
          </div>
        </div>
        <div className="row faq__row">
          <div className="col">
            <h4>Why do I have to book an Initial Consultation?</h4>
            <p>
              It is important that our foot specialists perform a full
              assessment of your foot health with a detailed patient history of
              the issue in order to form the appropriate treatment plan for your
              foot concern. This will allow our clinic to provide the proper
              patient-centred care our patients deserve.
            </p>
          </div>
          <div className="col">
            <h4>Why do I have to pay when booking online?</h4>
            <p>
              We require a payment to secure your appointment and to prove you
              are a real person needing an appointment. We will give you the
              paid receipt at the end of your appointment. You will not receive
              it before your appointment has actually occurred.
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Faq_texts;
