import './center.css'
import Kal from './img/div (8).png'
import waterlo from './img/61f0078b558d19581cc0bbcd_university-of-waterloo-logo.svg.png'
import michener from './img/61f00ddd81794abc01074586_Logo_MichenerInstituteOfEducation.svg.png'
import college from './img/61f006fa0a568a7450fe86ff_Logo_MississaugaFootClinic_CollegeOfChiropodistOfOntario.svg.png'
import React from 'react'

function Center() {
  return (
    <div className="center_cont container">
          <div className="center_cont2">
                 <div className="kalimg">
                    <img src={Kal} alt="./img/kal.png" /> 
                </div>
              
                <div className="center_text">
              
                <p className='blu'>Chiropodist Profile</p>
                
                    <h2>Jonathan Tomines</h2>
                    <h5>Chiropodist</h5>
                    <p className='ppp'>Jonathan is a Registered Chiropodist licensed under the Chiropody Act with the College of Chiropodists of Ontario. He received his Undergraduate Degree in Bio Medical Science at the University of Waterloo, further obtaining his Graduate Advanced Diploma of Health Sciences specializing in Chiropody at the Michener Institute for Applied Health Sciences. At Mississauga Foot Clinic, Jonathan has integrated various modernized platforms to enrich the clinic experience for their patients such as laser therapy for fungal nails and various soft tissue surgeries. Jonathan is dedicated to continually innovate the practice and educate the patients of all ages to provide the best quality of foot health care throughout Ontario. His "Toe Bro" Youtube personality became a hit for online viewers and has been gathered over 500 million views and over 1million YouTube Subscribers in addition to getting his own TV show, produced by A&E.</p>
                <div className="logotip">
                    <img src={waterlo} alt="./img/61f0078b558d19581cc0bbcd_university-of-waterloo-logo.svg.png" />
                    <img src={michener} alt="./img/61f00ddd81794abc01074586_Logo_MichenerInstituteOfEducation.svg.png" />
                    <img src={college} alt="./img/61f006fa0a568a7450fe86ff_Logo_MississaugaFootClinic_CollegeOfChiropodistOfOntario.svg.png" />
                </div>
                
                </div>

           </div>
       </div>
  )
}

export default Center