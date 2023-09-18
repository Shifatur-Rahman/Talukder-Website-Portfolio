import React, {useState, useEffect} from 'react'
import "./ProductDetails.css"
import portfolioItems from "../Portfolio/PortfolioImgApi";
import { useParams } from 'react-router-dom';
import totalProduct from "../Portfolio/PortfolioImgApi.jsx";
import tgLogo from "../../asset/images/Logo/talukderLogo.png"

import plusIcon from '../../asset/images/icon-plus.svg';
import minusIcon from '../../asset/images/icon-minus.svg';
import { Lightbox } from './Lightbox';
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = ({ productQuantity, setProductQuantity, setCartProductQuantity,}) => {

  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const handleAddToCart = () => {
    setCartProductQuantity((prevState) => prevState + productQuantity);
    setProductQuantity(0);
  };

  let { id } = useParams();

  return (
    <>
    
       <div style={{ backgroundColor: "#bfbfbf"}}>
         {
          totalProduct.map((singleItem)=>{
            if(singleItem.id == id){
              return(

                // <div className='grid-container'> 
                //   <div key={singleItem.id} className="grid-item-one">
                //     <img src={`${singleItem.imgSrc}`} alt="single product" />
                //   </div>
                //   <div key={singleItem.id} className="grid-item-two" style={{backgroundColor: ""}}>
                //   <img className='tgLogo' src={tgLogo} alt="Logo" />
                //     <p>{singleItem.id}</p>
                //     <p>{singleItem.title}</p>
                //   </div>
                // </div>

                <main style={{ marginTop: "5rem" }} className="product">
                  <div className="container-md grid product-container">
                    <div style={{ marginTop: "3rem", marginBottom: "5rem" }} className="flex product-image">
                      <div id="imageMagnifier">

                        <ReactImageMagnify {...{
                          smallImage: {
                            alt: 'TGI Image',
                            isFluidWidth: true,
                            src: `${singleItem.imgSrc}`,
                            className: 'large',
                            width: 380,
                            height: 480,
                          },
                          largeImage: {
                            src: `${singleItem.imgSrc}`,
                            width: 800,
                            height: 800,
                            className: 'small'
                          },
                          enlargedImageContainerDimensions:{
                             width: '100%',
                             height: '100%',
                             backgroundColor: 'white'
                          },
                         // enlargedImagePosition: 'over', 
                          lensStyle: {backgroundColor: 'rgba(0,0,0,.4)'}
                        }} />

                      {/* <img className='productDescriptionImg'
                        onClick={() => window.innerWidth > 768 && setLightbox(true)} 
                        src={`${singleItem.imgSrc}`} 
                        alt="" 
                      /> */}

                      </div>

                      <div className="thumbnail-wrapper flex">
                        <div className="thumbnail">
                          <img
                            onClick={() => setCurrentProductImage(0)}
                            className={currentProductImage === 0 ? 'active' : ''}
                            src={`${singleItem.imgSrc}`}
                            alt="thumbnail"
                          />
                        </div>

                        <div className="thumbnail">
                          <img
                            onClick={() => setCurrentProductImage(1)}
                            className={currentProductImage === 1 ? 'active' : ''}
                            src={`${singleItem.imgSrc}`}
                            alt="thumbnail"
                          />
                        </div>

                        <div className="thumbnail">
                          <img
                            onClick={() => setCurrentProductImage(2)}
                            className={currentProductImage === 2 ? 'active' : ''}
                            src={`${singleItem.imgSrc}`}
                            alt="thumbnail"
                          />
                        </div>

                        <div className="thumbnail">
                          <img
                            onClick={() => setCurrentProductImage(3)}
                            className={currentProductImage === 3 ? 'active' : ''}
                            src={`${singleItem.imgSrc}`}
                            alt="thumbnail"
                          />
                        </div>
                      </div>

                      {/* {window.innerWidth <= 768 && (
                        <>
                          <button
                            onClick={() =>
                              setCurrentProductImage((prevState) =>
                                prevState === 0 ? portfolioItems.length - 1 : prevState - 1,
                              )
                            }
                            className="lightbox-control control-prev"
                          >
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M11 1 3 9l8 8"
                                stroke="#1D2026"
                                strokeWidth="3"
                                fill="none"
                                fillRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() =>
                              setCurrentProductImage((prevState) =>
                                prevState === portfolioItems.length - 1 ? 0 : prevState + 1,
                              )
                            }
                            className="lightbox-control control-next"
                          >
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="m2 1 8 8-8 8"
                                stroke="#1D2026"
                                strokeWidth="3"
                                fill="none"
                                fillRule="evenodd"
                              />
                            </svg>
                          </button>
                        </>
                      )} */}



                    </div>
                    <div className="product-description flow">
                      <p className="text-uppercase fw-700 fs-100 letter-spacing-1 Orange">
                        {/* Talukder Group of Industries */}
                        <img src={tgLogo} className='tgLogo' />
                      </p>
                      <h1 className="fw-700 line-height-300 fs-800 blue">
                        {singleItem.title}
                      </h1>
                      <p style={{textAlign: 'justify'}} className="fw-400 fs-400 darkGrayishBlue">
                      The product details page for Talukder Group can provide comprehensive information about their products,
                      including specifications, features, and any other relevant details. 
                      Here's a sample description of what the product details page might include:
                      </p>
                      <div className="product-price">
                        <div className="discounted-price flex">
                          <span className="fw-700 blue fs-700">Tk 7,500.00</span>
                          <span className="offer fw-700 fs-400 Orange">50%</span>
                        </div>
                        <div className="original-price">
                          <span className="fw-700 fs-400 line-height-500 text-line-through GrayishBlue">
                            7,500
                          </span>
                        </div>
                      </div>

                      <div className="action-wrapper flex">
                        <div className="product-quantity flex">
                          <img
                            src={minusIcon}
                            alt=""
                            onClick={() =>
                              setProductQuantity((prevState) =>
                                prevState !== 0 ? prevState - 1 : 0,
                              )
                            }
                          />
                          <span className="fw-700 fs-400 blue">{productQuantity}</span>
                          <img
                            src={plusIcon}
                            alt=""
                            onClick={() => setProductQuantity((prevState) => prevState + 1)}
                          />
                        </div>
                        <button
                          onClick={handleAddToCart}
                          className="btnCart flex fw-700 fs-400"
                        >
                          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                              fill="#ffffff"
                              fillRule="nonzero"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  {lightbox && (
                    <Lightbox productData={portfolioItems} setLightbox={setLightbox} />
                  )}
                </main>
              )
            } 
          })
         }
      </div>
    
    </>
  )
}

export default ProductDetails