import React, {useState,useEffect} from 'react'
import property1 from "../../asset/images/property logo/one.png";
import property2 from "../../asset/images/property logo/two.png";
import property3 from "../../asset/images/property logo/three.png";
import property4 from "../../asset/images/property logo/four.png";
import property5 from "../../asset/images/property logo/five.png";
import property6 from "../../asset/images/property logo/six.png";
import property7 from "../../asset/images/property logo/seven.png";
import property8 from "../../asset/images/property logo/eight.png";
import "./ProductType.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductType = () => {

    useEffect(() => {
        AOS.init({
           offset: 120, 
           delay: 0,
           easing: "ease",
           duration: 1500,
           disable: false,
           once: false,
           mirror: false,
           startEvent: 'DOMContentLoaded', 
           animatedClassName: 'aos-animate',
           initClassName: 'aos-init',
           useClassNames: false,
        });
      }, []);


  return (
    <>
          <div  className="container-xxl py-5">
              <div className="container">
                  <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: " 600px" }}>
                      <h1 style={{ color: "#0E2E50", fontWeight: "700", fontSize: "35px" }} className="mb-3">Product Types</h1>
                      <p style={{color: "#8c8c8c"}}>Talukder Group offers a diverse range of products across various industries. Here are some common product categories associated with Talukder Group:</p>
                  </div>

                  <div data-aos="fade-up" className="row g-4">
                      <div className="col-lg-3 col-sm-6 wow fadeInUp">
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3" >
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property1} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Home Furnitutre</h6>
                                  <span className='propertySpan'> 200+ Products </span>
                              </div>
                          </a>
                      </div>

                      <div className="col-lg-3 col-sm-6 wow fadeInUp">
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3">
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property2} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Office Furnitutre</h6>
                                  <span className='propertySpan'>500+ Products</span>
                              </div>
                          </a>
                      </div>

                      <div className="col-lg-3 col-sm-6 wow fadeInUp" >
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3">
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property3} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Industrial Furnitutre</h6>
                                  <span className='propertySpan'>100+ Products</span>
                              </div>
                          </a>
                      </div>
                    
                      <div className="col-lg-3 col-sm-6 wow fadeInUp" >
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3">
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property4} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>School Furnitutre</h6>
                                  <span className='propertySpan'>100+ Products</span>
                              </div>
                          </a>
                      </div>
                    
                      <div className="col-lg-3 col-sm-6 wow fadeInUp" >
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3">
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property5} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Plastic Furnitutre</h6>
                                  <span className='propertySpan'>200+ Products</span>
                              </div>
                          </a>
                      </div>
                    
                      <div className="col-lg-3 col-sm-6 wow fadeInUp" >
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3" >
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property6} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Plastic Household</h6>
                                  <span className='propertySpan'>300+ Products</span>
                              </div>
                          </a>
                      </div>
                    
                      <div className="col-lg-3 col-sm-6 wow fadeInUp" >
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3">
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property7} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Toy</h6>
                                  <span className='propertySpan'>100+ Products</span>
                              </div>
                          </a>
                      </div>
                    
                      <div className="col-lg-3 col-sm-6 wow fadeInUp" >
                          <a style={{ textDecoration: "none", cursor: "pointer" }} className="cat-item d-block bg-light text-center rounded p-3">
                              <div className="rounded p-4">
                                  <div className="icon mb-3">
                                      <img className="img-fluid" src={property8} alt="Icon" />
                                  </div>
                                  <h6 className='propertyHeader'>Upvc</h6>
                                  <span className='propertySpan'>200+ Products</span>
                              </div>
                          </a>
                      </div>

                  </div>
              </div>
          </div>

    </>
  )
}

export default ProductType