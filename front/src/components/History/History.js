import React from 'react'
import './History.css'
import Historyhome from "../../assets/historyhome.png"

const History = () => {
    return (
      <div className="history-container">
        <div className='leftdivhistory'>
          <h2>History</h2>
          <p className='historydescription'>We Are Dedicated To Creating And Providing The Ultimate In Luxury Gifts For All Age Groups. We Use Only Fairly Traded, Organically Grown, Premium Quality Products Sourced From Small-Scale Farmers, Supporting Farming Communities Through Trade Rather Than Aid.</p>
          <button className='aboutusbutton'><b>- About Us -</b></button>
        </div>
        <div className='rightdivhistory'>
          <img src={Historyhome} alt="HistoryImage" />
        </div>
      </div>
    )
  }

export default History 
