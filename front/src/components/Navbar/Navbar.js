import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import img1 from "../../assets/img1.jpeg";
// import img2 from '../../assets/img2.jpeg';
import img11 from '../../assets/img11.jpeg'
import Logo from "../../assets/logo.png"
import img22 from "../../assets/img22.jpg"
import cart from "../../assets/cart.svg"
import usericon from "../../assets/usericon.svg"

const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate('/Cart')
  }
  return (
    <div className='divnavbar'>
      <div className='leftsidedivnavbar'>
        <ul className='ulnavbar'>
          <li className={`linavbar ${location.pathname === '/' ? 'active' : ''}`}><Link to='/'>HOME</Link></li>
          <li className={`linavbar ${location.pathname === '/Product' ? 'active' : ''}`}><Link to='/Product'>SHOP</Link></li>
          <li className='linavbar dropdown1'>PAGES <span className="arrow-icon">&#9660;</span>
            <ul className="dropdown-content1">
              <li><Link to='/Productus'>About Us</Link></li>
              <li>History</li>
              <li>FAQs</li>
            </ul>
          </li>
          <li className={`linavbar ${location.pathname === '/Contactus' ? 'active' : ''}`}><Link to='/Contactus'>CONTACT</Link></li>
        </ul>
      </div>
      <div className='logodivnavbar'>
        <Link to='/'><img src={Logo} alt='logo' className='logoheader1'/></Link>
      </div>
      <div className='rightsidedivnavbar'>
      <div className='ttss'>
        <img src={usericon} alt='usericon' className='usericon' />
        <img className='carticon' onClick={handlenavigate} src={cart} alt='carticon' />
        </div>
      </div>
    </div>
  );
};

const ImageSlider = ({ imageUrl }) => {
  return (
    <div className="image-slider" style={{ zIndex: -1 }}>
      <img src={imageUrl} alt="Slider" />
    </div>
  );
};

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [ img11, img22 ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 16000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <div className="image-container">
        <ImageSlider imageUrl={images[currentImageIndex]} />
      </div>
    </div>
  );
};

export default App;
