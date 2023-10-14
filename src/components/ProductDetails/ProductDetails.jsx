import React, { useState, useEffect } from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
import totalProduct from "../Portfolio/PortfolioImgApi.jsx";
import tgLogo from "../../asset/images/Logo/talukderLogo.png"
import ReactImageMagnify from 'react-image-magnify';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from 'react-bootstrap';
import UpvcModal1 from '../UpvcModal1/UpvcModal1';
import RelatedProducts from './RelatedProducts';
import StoreLocation from './StoreLocation';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Spinner from "../Spinner/Spinner.jsx";

const ProductDetails = ({ productQuantity, setProductQuantity, setCartProductQuantity, }) => {

  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  const handleAddToCart = () => {
    setCartProductQuantity((prevState) => prevState + productQuantity);
    setProductQuantity(0);
  };

  let { id } = useParams();
  const [value, setValue] = React.useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      {loading ? (
        
        <div style={{marginTop:"7rem"}}>
          <Spinner />
        </div>

      ) : (

        <div style={{ backgroundColor: "#e6e6e6" }}>
          {
            totalProduct.map((singleItem) => {
              if (singleItem.id == id) {
                return (
                  <main style={{ marginTop: "5rem" }} className="product">
                    <div className="container-md grid product-container">

                      <div style={{ marginTop: "3rem" }} className="flex product-image">
                        <div id="imageMagnifier">

                          <ReactImageMagnify {...{
                            smallImage: {
                              alt: 'TGI Image',
                              isFluidWidth: true,
                               src: `${singleItem.imgSrc}`,
                             // src: `${singleItem.imgSrc[currentProductImage]}`,
                              className: 'large',
                              width: 380,
                              height: 480,
                            },
                            largeImage: {
                               src: `${singleItem.imgSrc}`,
                              // src: `${singleItem.imgSrc[currentProductImage]}`,
                              width: 800,
                              height: 800,
                              className: 'small'
                            },
                            enlargedImageContainerDimensions: {
                              width: '100%',
                              height: '100%',
                              backgroundColor: 'white'
                            },
                            // enlargedImagePosition: 'over', 
                            lensStyle: { backgroundColor: 'rgba(0,0,0,.4)' }
                          }} />
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
                              // src={`${singleItem.imgSrc[3]}`}
                              src={`${singleItem.imgSrc}`}
                              alt="thumbnail"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="product-description flow">
                        <p className="text-uppercase Orange">
                          {/* Talukder Group of Industries */}
                          <img src={tgLogo} className='tgLogo' alt='altLogo' />
                        </p>
                        <h1 style={{ textTransform: "uppercase" }} className="productDetailsTitle">
                          {singleItem.title}
                        </h1>
                        <p style={{ textAlign: 'justify', fontSize: "14px" }} className="darkGrayishBlue">
                          The product details page for Talukder Group can provide comprehensive information about their products,
                          including specifications, features, and any other relevant details.
                          Here's a sample description of what the product details page might include:
                        </p>

                        {/* <div className="product-price">
                          <div className="discounted-price flex">
                            <span className="productPrice">BDT 00.00</span>
                            <span className="offer fw-700 fs-400 Orange">50%</span>
                          </div>
                          <div className="original-price">
                            <span style={{ textDecoration: "line-through", fontSize: "16px" }} className="fw-700 fs-400 line-height-500 GrayishBlue">
                              BDT 00.00
                            </span>
                          </div>
                        </div> */}

                        <div className="action-wrapper flex">

                          <button
                            onClick={handleAddToCart}
                            className="btnCart flex2"
                          >
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#ffffff"
                                fillRule="nonzero"
                              />
                            </svg>
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product description */}
                    <Container>

                      <Box className="tabBox" style={{ padding: "0 1rem" }} sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className='custom-tab' onChange={handleChange} aria-label="lab API tabs example">
                              <Tab label="Overview" value="1" />
                              <Tab label="Material Information" value="2" />
                              <Tab label="Reviews" value="3" />
                            </TabList>
                          </Box>

                          <TabPanel className='tabPanelMargin' style={{ marginTop: "4px" }} value="1">

                            {(singleItem.code) &&
                              <span className='singleItemProductTitle'>Code : <span className='singleItemProductValue'> {singleItem.code} </span> <br /> </span>
                            }

                            <span className='singleItemProductTitle'>Product Name : <span className='singleItemProductValue'> {singleItem.title}</span> </span> <br />
                            <span className='singleItemProductTitle'>Product Type : <span className='singleItemProductValue'>{singleItem.category}</span> </span> <br />

                            {
                              singleItem.Warranty &&
                              <div>
                              <span className='singleItemProductTitle'>Warranty : <span className='singleItemProductValue'> {singleItem.Warranty}</span> </span>
                              </div>
                            }

                             {
                              singleItem.size &&
                              <span style={{ marginBottom: "5px" }} className='singleItemProductTitle'>Size : <span className='singleItemProductValue'> {singleItem.size}</span> <br /> </span>
                            }

                            {
                              singleItem.size2 &&
                              <span className='singleItemProductTitle'>Size : <span className='singleItemProductValue'> {singleItem.size2}</span> </span>
                            }

                          </TabPanel>

                          <TabPanel className='tabPanelMargin' style={{ marginTop: "4px" }} value="2">
                            
                            {
                              singleItem.material &&
                              <ul className='productDetailsList'>
                                <li className='singleItemProductValue'> Made from {singleItem.material}.</li>
                              </ul>
                            }
    
                            <div>
                              <ul className='productDetailsList'>
                                <li className='singleItemProductValue'>Imported high quality hardware fittings</li>
                                <li className='singleItemProductValue'>Indoor use only</li>
                                <li className='singleItemProductValue'> Easy and damage free transportation.  </li>
                                <li className='singleItemProductValue'>Any assembly or installation required will be done by the TFL team at the time of delivery</li>
                                <li className='singleItemProductValue'>Free assembly service by expert technician</li>
                              </ul>
                            </div>

                            {/* <br /> */}                            
      
                            {singleItem.color && singleItem.code && (
                              <div style={{ margin: "0 5px" }} className="table-responsive RelatedProductTable">
                                <table className="table table-bordered table-sm custom-table">
                                  <tbody>
                                    <tr>
                                      <th
                                        style={{
                                          fontSize: "10px",
                                          fontWeight: "800",
                                          width: "10px",
                                        }}
                                        scope="row"
                                      >
                                        Code
                                      </th>
                                      {singleItem.code.split("/").map((code, index) => (
                                        <td
                                          style={{
                                            fontSize: "8px",
                                            textAlign: "center",
                                            margin: "0",
                                            padding: "5px 0 0 0",
                                            width: "5px",

                                          }}
                                          key={index}
                                        >
                                          {code}
                                        </td>
                                      ))}
                                    </tr>
                                    <tr>
                                      <th
                                        style={{
                                          fontSize: "10px",
                                          fontWeight: "800",
                                          width: "20px"
                                        }}
                                        scope="row"
                                      >
                                        Color
                                      </th>
                                      {singleItem.color.split("/").map((color, index) => (
                                        <td
                                          style={{
                                            backgroundColor: color,
                                            cursor: "pointer",
                                            width: "5px"
                                          }}
                                          key={index}
                                        ></td>
                                      ))}
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}

                            {
                              singleItem.longCode &&
                              <UpvcModal1 title={singleItem.title} category={singleItem.category} code={singleItem.longCode} size={singleItem.longSize} thickness={singleItem.longThickness} img={singleItem.imgSrc} />
                            }

                            

                          </TabPanel>

                          <TabPanel className='tabPanelMargin' style={{ marginTop: "4px" }} value="3">

                            <p style={{ fontSize: "15px", color: "#4d4d4d", fontWeight: "600", marginLeft: "5px" }}>4.5 out of 5 (5 Review)</p>

                            <Stack spacing={1}>
                              <Rating name="size-large" defaultValue={5} size="large" readOnly />
                              <Rating name="size-medium" defaultValue={4} readOnly />
                              <Rating name="size-small" defaultValue={0} size="small" readOnly />
                            </Stack>

                          </TabPanel>

                        </TabContext>
                      </Box>
                    </Container>

                    {/* Related Product slider */}
                    <RelatedProducts id={singleItem.id} category={singleItem.category} />

                    {/* Store Location */}
                    <StoreLocation />

                  </main>
                )
              }
            })
          }
      </div>

      )}

    </>
  )
}

export default ProductDetails
