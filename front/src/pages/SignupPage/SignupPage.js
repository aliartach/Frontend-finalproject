import React from 'react'
import "./SignupPage.css"
import Navbarmain from '../../components/Navbarmain/Navbarmain'
import Signup from '../../components/Signup/Signup'
import Footer from '../../components/Footer/Footer'
const SignupPage = () => {
  return (
    <div className='signuppage'>
      <Navbarmain/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default SignupPage
