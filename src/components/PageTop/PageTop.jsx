import React, { Component } from "react";
// import { Col, Container, Row } from "react-bootstrap";
import "./PageTop.css";
import pic1 from "../../asset/images/vector img/ZigzagDiagonalCyan1.png"
import pic2 from "../../asset/images/vector img/crossCyan .png"
import pic3 from "../../asset/images/vector img/circleCoral2.png"
import pic4 from "../../asset/images/vector img/TriangleCyan.png"

class PageTop extends Component {
  render() {
    return (
      <>

        {/* <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container>
              <Row>
                <Col className="pageContent text-center">
                  <h3 className="mainTitle">{this.props.pageTitle}</h3>
                </Col>
              </Row>
            </Container>
          </div>
        </Container> */}
      
  {/* new formula apply */}
     
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
  
  </>
    );
  }
}

export default PageTop;
