import React from 'react'
import cocoa from "../../assets/cocoa.jpg"
import "./Discover.css"

const Discover = () => {
  return (
    <div>
      <div className='discoverinner'>
        <div className='leftdivdiscover'>
            <img src={cocoa} className='imgleftdivdiscover' alt='cocoaimg' />
        </div>
        <div className='rightdivdiscover'>
          <div className='rightsidedescription'>
              <p className='newin'>NEW IN - LIMITED EDITION</p>
              <p className='discoverexcellence'>Discover Excellence</p>
              <p className='assd'>Cocoa Pure</p>
              <p className='aloalo'>Made 100% From Cocoa Fruit - Nothing Else.</p>
              <button className='secondshopnow'> <b>- SHOP NOW -</b></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
