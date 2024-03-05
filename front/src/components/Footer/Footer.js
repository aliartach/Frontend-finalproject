import React from 'react'
import "./Footer.css"
import instagram from "../../assets/instagram1.png"
import facebook from "../../assets/facebook.png"

const Footer = () => {
  return (
    <div>
      <footer class="footer">
          <div class="container2">
            <div class="footer-columns">
                  <div class="footer-column">
                      <h3>Pages</h3>
                      <ul className='ulfooter'>
                          <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                          <li><a href="/faqs">FAQs</a></li>
                          <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                          <li><a href="/about-us">About Us</a></li>
                      </ul>
                  </div>
                  <div class="footer-column">
                      <h3>Contact Us</h3>
                      <p>example@example.com</p>
                      <p>Phone: +123 45 67 890</p>
                      <p>Address: 123 Main St, City, Country</p>
                  </div>
                  <div class="footer-column">
                      <h3>Follow Us</h3>
                      <ul class="social-links">
                          <li><a href="https://www.instagram.com/"><img className='igicon' src={instagram} alt="instagram"/></a></li>
                          <li><a href="https://www.facebook.com/"><img className='facebookicon' src={facebook} alt="facebook"/> </a></li>
                      </ul>
                  </div>
            </div>
          </div>
       </footer>

    </div>
  )
}

export default Footer
