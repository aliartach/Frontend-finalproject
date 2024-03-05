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
              <p className='newin'><b>NEW IN - LIMITED EDITION</b></p>
              <p className='discoverexcellence'>Discover Excellence</p>
              <p className='assd'>Cocoa Pure</p>
              <p className='aloalo'><b>Made 100% From Cocoa Fruit - Nothing Else.</b></p>
              <button className='secondshopnow'><a href='/product'><b>- SHOP NOW -</b></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
