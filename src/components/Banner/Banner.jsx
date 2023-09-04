import React from 'react'
import banner1 from "../../asset/images/Banner/banner1.png"
import banner2 from "../../asset/images/Banner/banner2.png"
import { Container, Row, Col } from 'react-bootstrap'
import "./Banner.css"


const Banner = () => {
  return (
    <>
          <Container style={{marginTop: "5rem"}}>
              <Row>

                  <Col className='banner1' lg={6} md={6} sm={12}>
                      <div className="image-container">
                          <img src={banner1} alt="banner-1" />
                      </div>
                  </Col>

                  <Col className='banner1' lg={6} md={6} sm={12}>
                      <div className="image-container">
                          <img src={banner2} alt="banner-2" />
                      </div>
                  </Col>

              </Row>
          </Container>
    </>
  )
}

export default Banner