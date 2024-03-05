import React from 'react'
import "./Navbarmain.css"
import Logo from "../../assets/logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cart from "../../assets/cart.svg"
import usericon from "../../assets/usericon.svg"




const Navbarmain = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate('/Cart')
  }

  return (
    <div className='divnavbarmain'>
      <div className='leftsidedivnavbarmain'>
        <ul className='ulnavbarmain'>
          <li className={`linavbarmain ${location.pathname === '/' ? 'active' : ''}`}><Link to='/'>HOME</Link></li>
          <li className={`linavbarmain ${location.pathname === '/Product' ? 'active' : ''}`}><Link to='/Product'>SHOP</Link></li>
          <li className='linavbarmain dropdown'>
            PAGES<span className="arrow-icon">&#9660;</span>

            <ul className="dropdown-content">
              <li>About Us</li>
              <li>History</li>
              <li>FAQs</li>
            </ul>
          </li>
          <li className={`linavbarmain licontact ${location.pathname === '/Contactus' ? 'active' : ''}`}><Link to='/Contactus'>CONTACT</Link></li>
        </ul>
      </div>
      <div className='logodivnavbar'>
        <Link to='/'><img src={Logo} alt='logo' className='logoheader'/></Link>
      </div>
      <div className='rightsidedivnavbarmain'>
      <div className='ttyy'>
      <Link to="/ProfilePage"><img src={usericon} alt='usericon' className='usericon' /></Link>

        <img className='carticon' onClick={handlenavigate} src={cart} alt='carticon' />
        </div>
      </div>
    </div>
  )
}

export default Navbarmain
