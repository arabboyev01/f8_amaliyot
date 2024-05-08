import React from 'react'
import './feet.css'
function Feet() {
  return (
    <div className='container'>
      <div className="feet">
        <div className="feet__block">
        <div className="feet__list">
          <ul>
            <li><a href="#">General information</a></li>
          </ul>
          <h2>We’re here for you. <br /> And your feet.</h2>
          <p>See the full details of clinic hours and contact information below. Use the <br />
             booking buttons located across this site to book your appointment today.</p>
        </div>
        <div className="feet__list2">
          <div className="feet__loca">
            <ul>
              <li><a href="#">Location</a></li>
            </ul>
            <p>250 Dundas Street West <br /> Suite 305 <br /> Mississauga <br /> ON L5B 1J2</p>
          </div>
          <div className="feet__loca2">
          <ul>
              <li><a href="#">Business Hours</a></li>
              <p>Monday: 9:30 am - 6:30 pm. <br /> Tuesday: 9:30 am - 6:30 pm. <br /> Wednesday: 9:30 am - 6:30 pm. <br /> Thursday: 9:30 am - 6:30 pm. <br /> Friday: 9:30 am - 6:30 pm. <br /> Saturday: 9:30 am - 5:00 pm. <br /> Sunday: Closed.</p>
            </ul>
          </div>
        </div>
        </div>
        <div className="feet__block2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.20148910206467!2d72.37062105266953!3d40.739622338155115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced14ef50e8df%3A0x2efefb32dea3cb2c!2sAndijon!5e0!3m2!1sru!2s!4v1713945352582!5m2!1sru!2s" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
  )
}

export default Feet