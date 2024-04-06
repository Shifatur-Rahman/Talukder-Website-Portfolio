import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import "./PageTop.css";
import PageSlider from "../PageSlider/PageSlider";

class PageTop extends Component {
  render() {
    return (
      <>

  <PageSlider />

           {/*
     
  <div className="pageTopBanner">
  <div className="vector">
            <img data-aos="fade-right" src={pic1} alt="pic1" />
            <img data-aos="fade-right" src={pic2} alt="pic2" />
            <img data-aos="fade-right" src={pic3} alt="pic3" />
            <img data-aos="fade-right" src={pic4} alt="pic4" />
            <div className="pageContent text-center">
            <p data-aos="fade-right" className="pageCover">{this.props.pageTitle}</p>
            </div>
        </div>
  </div>
   */}
                
  </>
    );
  }
}

export default PageTop;
