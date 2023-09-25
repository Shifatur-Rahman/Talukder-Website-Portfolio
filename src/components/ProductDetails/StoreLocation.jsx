import React from 'react'
import "./ProductDetails.css"
// import { BiSolidLocationPlus } from "@react-icons/all-files/BiSolidLocationPlus";
import { MdOutlineLocationCity } from 'react-icons/md';


const StoreLocation = () => {
  return (
    <>
    
    <div className='storeLocation'>

        <div className='leftStore'>
          <span>
            <MdOutlineLocationCity className='storeLocationLogo' />
            <span style={{ color: "#ff7d1a", fontSize:"25px", fontWeight:"700",marginTop:"10px" }}> Store Locations </span>
          </span> <br/>
          <span>Store Location Content</span> <br />
          <span>available all products</span> <br />
          <a href='#'>Store Locator</a>
        </div>

      <div className='rightStore'>
        <p>Contact us</p>
      </div>

    </div>
    
    
    </>
  )
}

export default StoreLocation