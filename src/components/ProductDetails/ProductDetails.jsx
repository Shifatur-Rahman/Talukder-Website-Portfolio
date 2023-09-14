import React, {useState, useEffect} from 'react'
import "./ProductDetails.css"
import portfolioItems from "../Portfolio/PortfolioImgApi";
import TopNavigation from '../TopNavigation/TopNavigation';
import { useParams } from 'react-router-dom';
import totalProduct from "../Portfolio/PortfolioImgApi.jsx";

const ProductDetails = () => {

  let { productId } = useParams();
  // console.log(id);
  
  return (
    <>
    
      {/* <div style={{ marginTop: "5rem"}}>
        <h1> Hello world </h1> */}

         {
          totalProduct.map((singleItem)=>{
             console.log(singleItem.title);
            if(singleItem.id === productId){
              return(
                <div key={singleItem.id}>

                  <p>{singleItem.title}</p>

                </div>
              )
            } else{
              return (
                <div key={singleItem.id}>
                  <p>This is not the item you're looking for.</p>
                </div>
              );
            }
          })
         }

   {/* <img src={`${singleItem.imgSrc}`} alt="single product" /> */}

      {/* </div> */}
    
    </>
  )
}

export default ProductDetails