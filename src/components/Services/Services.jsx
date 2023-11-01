import React from 'react'
import "./Services.css"
import { Container, Row, Col } from 'react-bootstrap'
import service1 from "../../asset/images/Services/service1.png"
import service2 from "../../asset/images/Services/service2.png"
import service3 from "../../asset/images/Services/service3.png"
import service4 from "../../asset/images/Services/service4.png"
import service5 from "../../asset/images/Services/service5.png"
// import service6 from "../../asset/images/Services/service6.png"
// import serviceOverlay from "../../asset/images/Services/our-service-overlay.jpg"
// import servicePortfolio from "../../asset/images/Services/ourPortfolio.png"
import servicePlus from "../../asset/images/Services/service-plus.png"
// import vec4 from "../../asset/images/Services/vec-4.png"
// import { BiPlusCircle } from 'react-icons/bi';
import { forwardRef } from "react";

const Services = (props, ref) => {
  return (
    <>
     
   {/* <!-- our service section starts here  --> */}

          <section style={{marginTop:"2rem"}} className="our_service_section"  ref={ref}>

              <div className="container">
                
                  <div className="row">
                      <div className="ourService_title">
                          <p className='serviceSubTitle'>Our Services</p>
                          <h1 className='serviceTitle'>Exclusive services for the next
                              <br /> honourable customer</h1>
                      </div>
                  </div>

                  <Row data-aos="fade-up">
                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service1} alt="plastic" />
                              </div>
                              <div className="content">
                                  <p className='serviceTitle'>Plastic</p>
                                  <p className='servicePara'>Talukder Plastics pioneering excellence in plastic manufacturing and Eco-Friendly Solutions.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service2} alt="upvc" />
                              </div>
                              <div className="content">
                                  <p className='serviceTitle'>uPVC</p>
                                  <p className='servicePara'> Talukder uPVC transforming spaces with premium uPVC solutions. Crafting durability and elegance.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                    {/*  <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service3} alt="furniture" />
                              </div>
                              <div className="content">
                                  <p className='serviceTitle'>Office Furniture</p>
                                  <p className='servicePara'> Talukder Office Furniture elevating workplaces with ergonomic designs and functional style.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                       <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service4} alt="interior" />
                              </div>
                              <div className="content">
                                  <p className='serviceTitle'>Metal & Fabrications</p>
                                  <p className='servicePara'>Talukder Metal & Fabrications creating inspired spaces that blend beauty and functionality.</p>
                                  <a>
                                      <img src={servicePlus} alt="interior" />
                                  </a>
                              </div>
                          </div>
                      </Col> */}

                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service5} alt="trading" />
                              </div>
                              <div className="content">
                                  <p className='serviceTitle'> Trading  </p>
                                  <p className='servicePara'>Talukder Trading navigating Global Markets with Expertise, Integrity, and Excellence.</p>
                                  <a>
                                      <img className='plusIcon' src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                         

                  </Row>
                  
              </div>
          </section>
    </>
  )
}

export default forwardRef(Services);
