import React, {useState, useEffect} from 'react'
import "./ProductDetails.css"
import portfolioItems from "../Portfolio/PortfolioImgApi";
import TopNavigation from '../TopNavigation/TopNavigation';
import { useParams } from 'react-router-dom';
import totalProduct from "../Portfolio/PortfolioImgApi.jsx";

const ProductDetails = () => {

  let { id } = useParams();
  // console.log(id);
  
  return (
    <>
    
       <div style={{ marginTop: "5rem"}}>

         {
          totalProduct.map((singleItem)=>{
            //  console.log(singleItem.id);
            //  console.log(id);

            if(singleItem.id == id){
              return(
                <div className='novel'> 

                  <div key={singleItem.id} className="three" style={{backgroundColor:"red"}}>
                    <img src={`${singleItem.imgSrc}`} alt="single product" />
                  </div>

                  <div key={singleItem.id} className="three">
                    <p>{singleItem.id}</p>
                    <p>{singleItem.title}</p>
                  </div>

                </div>

              )
            } 
            
            // else{
            //   return (
            //     <div key={singleItem.id}>
            //       <p>This is not the item you're looking for.</p>
            //     </div>
            //   );
            // }

          })
         }
      </div>
    
    </>
  )
}

export default ProductDetails