import React from 'react'
import Navbarmain from '../../components/Navbarmain/Navbarmain'
import Login from '../../components/Login/Login'
import "./Loginpage.css"
import Footer from "../../components/Footer/Footer"

const Loginpage = () => {
  return (
    <div className='loginpage'>
      <Navbarmain/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default Loginpage
