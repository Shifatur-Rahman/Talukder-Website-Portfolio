import React from 'react'
import "./ProductDetails.css"
// import { BiSolidLocationPlus } from "@react-icons/all-files/BiSolidLocationPlus";
import { MdOutlineLocationCity } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';


const StoreLocation = () => {
  return (
    <>
    
    <div className='storeLocation'>

        <div className='leftStore'>
          <span>
            <MdOutlineLocationCity className='storeLocationLogo' />
            <span style={{ color: "#ff7d1a", fontSize:"25px", fontWeight:"700",marginTop:"10px" }}> Store Locations </span>
          </span> <br/>
          <span style={{color:"#595959", fontSize:"15px"}}>Store Location Content</span> <br />
          <span style={{color:"#595959", fontSize:"15px"}}>available all products</span> <br />
          <a style={{textDecoration:"underline", color:"#ff7d1a"}} href='#'>Store Locator</a>
        </div>

        <div className='rightStore'>
          <span>
            <BsTelephoneFill className='storeLocationLogoContact' />
            <span style={{ color: "#ff7d1a", fontSize: "25px", fontWeight: "700" }}> Contact us </span>
          </span> <br />
          <span style={{ color: "#595959", fontSize: "15px" }}>Have any question? We are here to talk! </span> <br />
          <span style={{ color: "#595959", fontSize: "15px" }}>Let us know your queries</span> <br />
          <a style={{ textDecoration: "underline", color: "#ff7d1a" }} href='#'>Contact Us</a>
        </div>

    </div>
    
    
    </>
  )
}

export default StoreLocation