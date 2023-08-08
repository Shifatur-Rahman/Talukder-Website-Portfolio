import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./KnowUs.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { forwardRef } from "react";
 import serviceVideo from "../../asset/Serevices Video/service.webm";

function KnowUs(props, ref) {

  return (
    <>
      <Container ref={ref}>
        <Row>
          <Col>
            {/* data-aos='fade-right' */}
            <h1 className="knowusTitle">Know Us</h1>
            <p className="knowusText">
              {" "}
              Talukder Group of Industries had started its journey since July,
              1973. Founder chairman Mr. Nurul Islam Talukder established
              Talukder foundry Ltd (TFL) with a vision of large-scale
              Industrialization. Now Talukder Group is a successful brand name
              as well as a flagship corporate name in corporate world with great
              achievement with the dedicated service to all her stakeholders and
              partners. Under the leadership of Managing Director Mr. Samsul
              Arafin Talukder Group of Industries becomes the largest partner of
              LGED, JICA and PEDP in furnishing Primary Schools all over the
              Country.
            </p>
            <div className="text-center">
              <NavLink className="knowMore" to="/about">
                {/* data-aos='flip-up'  */}
                <Button data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500" className="knowMoreBtn" variant="outline-info">
                  Know More
                </Button>{" "}
              </NavLink>
            </div>
          </Col>

{/* <Col sm={12} md={6} lg={8}>
<video  style={{width:"350px", height:"400px"}} >
<source src={serviceVideo} type="video/webm" />
    <source src={serviceVideo} type="video/mp4" />
    Sorry, your browser doesn't support videos.
</video>
</Col> */}

        </Row>
      </Container>
    </>
  );
}

export default forwardRef(KnowUs);
