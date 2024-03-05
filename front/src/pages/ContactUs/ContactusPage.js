import React from 'react'
import "./ContactusPage.css"
import Navbarmain from '../../components/Navbarmain/Navbarmain'
import Footer from '../../components/Footer/Footer'
import emailjs from '@emailjs/browser'
// import emailjs from 'emailjs-com';
import { useRef } from "react"
import Mailicon from "../../assets/mail.png"
import Phoneicon from "../../assets/phone.png"
import Pointericon from "../../assets/pointer.png"

const ContactusPage = () => {
    const form = useRef()
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dt2hcth', 'template_39b67mj', form.current, 'QJ4of0ddOkQuG9ILY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    
    const customTextColor = 'red';
    return (
      <div>
        <Navbarmain textColor={customTextColor}/>
        <div className="body">
        <p className="contactustitle">Contact Us</p>
        <div className="container">
          <div className="content">
          
  
              <div className="left-side">
                  <div className="address details">
                    <img src={Pointericon} alt='pointericon' className="pointericon contacticons"></img>
                    <div className="topic">Address</div>
                    <div className="text-one">Mount Lebanon Governorate · Batroûn, Lebanon </div>
                    
                  </div>
                  <div className="phone details">
                    <img src={Phoneicon} alt='phoneicon' className="phoneicon contacticons"></img>
                    <div className="topic">Phone</div>
                    <div className="text-one">+961 70028727</div>
                   
                  </div>
                  <div className="email details">
                    <img src={Mailicon} alt='mailicon' className="mailicon contacticons"></img>
                    <div className="topic">Email</div>
                    <div className="text-one">chocoheaven.lb@gmail.com</div>
                    
                  </div>
              </div>
  
              <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>For any inquiries, questions, feedback, or if you require further assistance or information, please feel free to reach out to us via email. We appreciate your interest and look forward to assisting you promptly.</p>
                   
  
              <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
              <input type="text" placeholder="Enter your name" name='user_name' required></input>
              </div> 
              <div className="input-box">
              <input type="email" placeholder="Enter your email" name='user_email' required></input>
              </div> 
              <div className="input-box">
              <input type="text" placeholder="Subject" name='subject' required></input>
              </div>
              <div className="input-box message-box">
              <textarea name="message"></textarea>
              </div> 
              <div >
                {/* <input type="submit" ></input> */}
                <button className='submitbuttoncontact' type='submit'>Submit</button>
              </div> 
              </form>
  
              </div>
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default ContactusPage
