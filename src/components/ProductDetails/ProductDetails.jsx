import React, {useState, useEffect} from 'react'
import "./ProductDetails.css"
import portfolioItems from "../Portfolio/PortfolioImgApi";
import TopNavigation from '../TopNavigation/TopNavigation';
import { useParams } from 'react-router-dom';
import totalProduct from "../Portfolio/PortfolioImgApi.jsx";
import tgLogo from "../../asset/images/Logo/talukderLogo.png"

const ProductDetails = () => {

  let { id } = useParams();

  return (
    <>
    
       <div style={{ marginTop: "5rem", backgroundColor: "#bfbfbf"}}>
         {
          totalProduct.map((singleItem)=>{
            if(singleItem.id == id){
              return(
                <div className='grid-container'> 
                  <div key={singleItem.id} className="grid-item-one">
                    <img src={`${singleItem.imgSrc}`} alt="single product" />
                  </div>
                  <div key={singleItem.id} className="grid-item-two" style={{backgroundColor: ""}}>
                  <img className='tgLogo' src={tgLogo} alt="Logo" />
                    <p>{singleItem.id}</p>
                    <p>{singleItem.title}</p>
                  </div>
                </div>
              )
            } 

          })
         }
      </div>
    
    </>
  )
}

export default ProductDetails