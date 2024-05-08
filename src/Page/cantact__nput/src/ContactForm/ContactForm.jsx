import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className="container">
            <div className="input__cantact">
                <div className='contact-form-content'>
                    <div className='name-container'>
                        <input type="text" placeholder='Full name' className='good__1' />
                        <input type="text" placeholder='Email' className='good__2' />
                    </div>
                    <div className="cantacr__input__df">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Send Messege</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}   

export default ContactForm 