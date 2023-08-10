import React from 'react'
import "./Services.css"
import { Container, Row, Col } from 'react-bootstrap'
import service1 from "../../asset/images/Services/service1.png"
import service2 from "../../asset/images/Services/service2.png"
import service3 from "../../asset/images/Services/service3.png"
import service4 from "../../asset/images/Services/service4.png"
import service5 from "../../asset/images/Services/service5.png"
import service6 from "../../asset/images/Services/service6.png"
import serviceOverlay from "../../asset/images/Services/our-service-overlay.jpg"
import servicePortfolio from "../../asset/images/Services/ourPortfolio.png"
import servicePlus from "../../asset/images/Services/service-plus.png"
import vec4 from "../../asset/images/Services/vec-4.png"
import { BiPlusCircle } from 'react-icons/bi';

const Services = () => {
  return (
    <>
     
   {/* <!-- our service section starts here  --> */}
   <section className="our_service_section">
    {/* <!-- vector area starts here  --> */}
       {/* <div className="vector">
        <img src={vec4} alt="" />
       </div> */}
     {/* <!-- vector area ends here  --> */}

     {/* <!-- main service section starts here  --> */}
     <div className="container">

        <div className="row">
            <div className="ourService_title">
                {/* <h1 className='knowusTitle'>our services</h1> */}
                <p className='serviceSubTitle'>Our Services</p>
                <h1 className='serviceTitle'>Exclusive services for the next
                <br /> honourable customer</h1>
            </div>
        </div>

                  <Row>
                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service1} alt="" />
                              </div>

                              <div className="content">
                                  <p className='serviceTitle'>Plastic</p>
                                  <p> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service2} alt="" />
                              </div>

                              <div className="content">
                                  <p className='serviceTitle'>uPVC</p>
                                  <p> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service3} alt="" />
                              </div>

                              <div className="content">
                                  <p className='serviceTitle'>Office Furniture</p>
                                  <p> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service4} alt="" />
                              </div>
                              <div className="content">
                                  <p className='serviceTitle'>Interior Design</p>
                                  <p> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world.</p>
                                  <a>
                                      <img src={servicePlus} alt="" />
                                  </a>
                              </div>
                          </div>
                      </Col>

                      <Col sm={12} md={6} lg={4}>
                          <div className="single_service_section">
                              <div className="service_section_img">
                                  <img src={service5} alt="" />
                              </div>

                              <div className="content">
                                  <p className='serviceTitle'> Trading  </p>
                                  <p>Lorem Ipsum available majority have suffered alteration in some form humour randomised.</p>
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

export default Services