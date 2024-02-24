import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import img1 from "../../assets/img1.jpeg";
// import img2 from '../../assets/img2.jpeg';
import img11 from '../../assets/img11.jpeg'
import Logo from "../../assets/logo.jpg"
import img22 from "../../assets/img22.jpg"

const Navbar = () => {
  return (
    <div className='divnavbar'>
      <div className='leftsidedivnavbar'>
        <ul className='ulnavbar'>
          <li className='linavbar'>HOME</li>
          <li className='linavbar'>SHOP</li>
          <li className='linavbar'>PRODUCT</li>
          <li className='linavbar'>PAGES</li>
          <li className='linavbar'>CONTACT</li>
        </ul>
      </div>
      <div className='logodivnavbar'>
        <img src={Logo} alt='logo' className='logoheader'/>
      </div>
      <div className='rightsidedivnavbar'>
      <div className='trytestdiv'></div>
        <p>Cart icon</p>
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
