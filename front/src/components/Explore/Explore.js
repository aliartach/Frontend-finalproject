import React from 'react'
import yogurtimg from "../../assets/yogurtimg.jpg"
import productsimg from "../../assets/productsimg.jpg"
import icecream from "../../assets/Icecream.jpg"
import chocolatebar from "../../assets/chocolatebar.jpg"
import "./Explore.css"

const Explore = () => {
  return (
    <div>
       <section className="testest">
                <section className="Shopourcategory">
                    <p className="shopourcollection">SHOP OUR COLLECTIONS</p>
                    <p className="exploreourchocolate">EXPLORE OUR CHOCOLATE <span className='spanproducts'>PRODUCTS</span></p>
                </section>
                <section className="Imagescollection">
                    <div className="ossaa">
                        <div className="imageproductheader1">
                            <div className="imgheader1">
                                <img src={yogurtimg} className="yogurtimg" alt="yogurtimg"/>
                            </div>
                            <div className="inner">
                            <label className="labeldescription">Yogurt</label>
                            <label className='labelitem'>6 Items</label>
                            </div>
                        </div>
                        <div className="imageproductheader2">
                        <div className="imgheader2">
                            <img src={productsimg} className="productimg" alt="productsimg" />
                        </div>
                        <div className="inner">
                            <label className="labeldescription">Fruits & Nuts</label>
                            <label className='labelitem'>13 Items</label>
                            </div>
                        </div>
                        <div className="imageproductheader3">
                        <div className="imgheader3">
                            <img src={icecream} className="icereamimg" alt="icecreamimg" />
                        </div>
                        <div className="inner">
                            <label className="labeldescription">Frozen</label>
                            <label className='labelitem'>4 Items</label>
                            </div>
                        </div>
                        <div className="imageproductheader4">
                        <div className="imgheader4">
                            <img src={chocolatebar} className="chocolatebar" alt="chocolatebarimg" />
                        </div>
                        <div className="inner">
                            <label className="labeldescription">Chocolate Bars</label>
                            <label className='labelitem'>7 Items</label>
                            </div>
                        </div>
                    </div>
                </section>
                </section>
    </div>
  )
}

export default Explore
