import React from 'react'
import "./Cartpage.css"
import Navbarmain from '../../components/Navbarmain/Navbarmain'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/Cart/Cart'
const Cartpage = () => {
  return (
    <div>
      <Navbarmain/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default Cartpage
