import "./Header.css"
import Navbar from '../Navbar/Navbar.js'
// import { Link } from "react-router-dom";


function header() {
    return (
        <>
            <section className="Header-Home">
                <Navbar/>
                <section className="sub-text-header">
                    <p className="chocolateheader">chocolate</p>
                    <p className="BRINGYOUHAPPINESS">BRING YOU HAPPINESS THROUGH A PIECE OF CAKE</p>
                    
                    <button className="button-header">
                        
                          <a href="/Product">- Shop Now -</a>
                       
                    </button>
                </section>
               
            </section>
        </>
    )
}
export default header