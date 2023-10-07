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
            <span className='storeHeader'> Store Locations </span>
          </span> <br/>
          <span className='storeSubHeader'>Store Location Content</span> <br />
          <span className='storeSubHeader'>available all products</span> <br />
          <a className='storeSubHeader' style={{textDecoration:"underline", color:"#ff7d1a"}} href='#'>Store Locator</a>
        </div>

        <div className='rightStore'>
          <span>
            <BsTelephoneFill className='storeLocationLogoContact' />
            <span className='storeHeader'> Contact us </span>
          </span> <br />
          <span className='storeSubHeader'>Have any question? We are here to talk! </span> <br />
          <span className='storeSubHeader'>Let us know your queries</span> <br />
          <a className='storeSubHeader' style={{ textDecoration: "underline", color: "#ff7d1a" }} href='#'>Contact Us</a>
        </div>

    </div>
    
    
    </>
  )
}

export default StoreLocation