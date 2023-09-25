import React from 'react'
import "./ProductDetails.css"
// import { BiSolidLocationPlus } from "@react-icons/all-files/BiSolidLocationPlus";
import { MdOutlineLocationCity } from 'react-icons/md';


const StoreLocation = () => {
  return (
    <>
    
    <div className='storeLocation'>

      <div className='leftStore'>
        <MdOutlineLocationCity className='storeLocationLogo' />
         <p>left store</p>
      </div>

      <div className='rightStore'>
        <p>Contact us</p>
      </div>

    </div>
    
    
    </>
  )
}

export default StoreLocation