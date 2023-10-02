import React from 'react'
import { BsCheck } from 'react-icons/bs';
import template from "../../asset/images/ReadMore/gallery1.jpg"
import "./TalukderDetails.css"
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'

const TalukderDetails = () => {
  return (
    <>
    
          {/* <div style={{ margin: "2rem 0" }} className="container">
              <div className="container">
                  <div className="row">

                      <div className="col-lg-6">
                          <div className="about-img position-relative overflow-hidden p-5 pe-0">
                              <img className="img-fluid w-100 propertyTempImg" src={template} alt="" />
                          </div>
                      </div>

                      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                          <h1 className="TalukderDetailsTitle">#1 Talukder Group of Industries</h1>
                          <p style={{ color: "#737373", textAlign: "justify", marginTop: "10px", fontSize: "16px" }} className="mb-4"> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world with great achievement with the dedicated service to all stakeholders and partners.
                          </p>
                          <p style={{ color: "#737373", textAlign: "justify" }}>
                              <a style={{ marginTop: "2px" }}> <BsCheck style={{ color: "#00B98E" }} /> Integrity </a>
                              <br />
                              <a style={{ marginTop: "15px" }}> <BsCheck style={{ color: "#00B98E" }} /> Keeping Promises </a>
                              <br />
                              <a style={{ marginTop: "15px" }}> <BsCheck style={{ color: "#00B98E" }} /> Customer Focus </a>
                          </p>
                          <NavLink className="knowMore" to="/about">
                              <a style={{ backgroundColor: "#00B98E", color: "#fff", fontWeight: "400" }} className="btn py-3 px-5 mt-3">Read More</a>
                          </NavLink>

                      </div>

                  </div>
              </div>
          </div> */}


          <div style={{ margin: "2rem 0" }}>
              <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>

                      {/* <div className="col-lg-6"> */}
                          <div className="about-img position-relative overflow-hidden p-5 pe-0">
                              <img className="propertyTempImg" src={template} alt="" />
                          </div>
                      {/* </div> */}

                      </Col>

                      <Col sm={12} md={6} lg={6}>

                      {/* <div className="col-lg-6"> */}
                          <h1 className="TalukderDetailsTitle">#1 Talukder Group of Industries</h1>
                          <p style={{ color: "#737373", textAlign: "justify", marginTop: "10px", fontSize: "16px" }} className="mb-4"> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world with great achievement with the dedicated service to all stakeholders and partners.
                          </p>
                          <p style={{ color: "#737373", textAlign: "justify" }}>
                              <a style={{ marginTop: "2px" }}> <BsCheck style={{ color: "#00B98E" }} /> Integrity </a>
                              <br />
                              <a style={{ marginTop: "15px" }}> <BsCheck style={{ color: "#00B98E" }} /> Keeping Promises </a>
                              <br />
                              <a style={{ marginTop: "15px" }}> <BsCheck style={{ color: "#00B98E" }} /> Customer Focus </a>
                          </p>
                          <NavLink className="knowMore" to="/about">
                              <a style={{ backgroundColor: "#00B98E", color: "#fff", fontWeight: "400" }} className="btn py-3 px-5 mt-3">Read More</a>
                          </NavLink>
                      {/* </div> */}

                  </Col>
                </Row>
              </Container>
          </div>
    
    </>
  )
}

export default TalukderDetails