import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./ReadMore.css"
import { BsCheck } from 'react-icons/bs';
import template from "../../asset/images/ReadMore/gallery1.jpg"

const ReadMore = () => {
  return (
    <>

          <div className="container-xxl py-5">
              <div className="container">
                  <div className="row g-5 align-items-center">

                      <div className="col-lg-6" data-wow-delay="0.1s">
                          <div className="about-img position-relative overflow-hidden p-5 pe-0">
                              <img className="img-fluid w-100 propertyTempImg" src={template} alt="" />
                          </div>
                      </div>

                      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                          <h1 style={{ color: "#0E2E50", fontWeight: "700" }} className="mb-4">#1 Place To Find The Perfect Property</h1>
                          <p style={{ color: "#737373", textAlign: "justify", marginTop: "10px", fontSize: "16px" }} className="mb-4"> Talukder Group is a successful brand name as well as a flagship corporate name in corporate world with great achievement with the dedicated service to all stakeholders and partners.
                          </p>
                          <p style={{ color: "#737373", textAlign: "justify" }}>
                              <a style={{ marginTop: "2px" }}> <BsCheck style={{ color: "#00B98E" }} /> Integrity </a>
                              <br />
                              <a style={{ marginTop: "15px" }}> <BsCheck style={{ color: "#00B98E" }} /> Keeping Promises </a>
                              <br />
                              <a style={{ marginTop: "15px" }}> <BsCheck style={{ color: "#00B98E" }} /> Customer Focus </a>
                          </p>
                          <a style={{ backgroundColor: "#00B98E", color: "#fff", fontWeight: "600" }} className="btn py-3 px-5 mt-3">Read More</a>
                      </div>
                      
                  </div>
              </div>
          </div>
    
    </>
  )
}

export default ReadMore