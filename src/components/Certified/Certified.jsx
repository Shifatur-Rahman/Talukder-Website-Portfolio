import React from 'react'
import "./Certified.css"
import { useState, useEffect } from "react";
import { Col, Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import Spinner from "../Spinner/Spinner.jsx";

import certified1 from "..//..//asset/images/Certified/aaa-2.png"
import certified2 from "..//..//asset/images/Certified/Bsti.png"
import certified3 from "..//..//asset/images/Certified/certified.jpg"
import certified4 from "..//..//asset/images/Certified/buetLogo.jpg"
import fire from "..//..//asset/images/Certified/fire.jpg"
import environmental from "..//..//asset/images/Certified/environmental.png"

const Certified = () => {
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
     // autoplaySpeed: 0,
       autoplaySpeed: 900,
      pauseOnHover: false,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: true,
            },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };
  
  return (
    <>
  
        <Container style={{ marginTop: "5rem", marginBottom: "1rem" }}>

<style>
    {`
      button.slick-arrow.slick-next::before,
      button.slick-arrow.slick-prev::before {
        content: "";
      }
    `}
  </style>

          <Slider {...settings}>
            {certifiedData.map((item, index) => (
              <Col className="clientCard" sm={12} md={6} lg={4} key={item.id}>
                <Card
                  data-aos="fade-down"
                  style={{
                    height: "200px",
                    width: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    boxShadow: "17px 10px 48px -37px rgba(0,0,0,0.75)",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                  className="clientReviewImgCard"
                >
                  <Card.Img
                     style={{
                       width: "90%",
                       height: "90%",
                       padding: "20px 10px",
                     }}
                    variant="top"
                    src={item.img}
                  />
                </Card>
              </Col>
            ))}
          </Slider>
        </Container>
    
    </>
  )
}

export default Certified


const certifiedData = [

{
    img: certified2,
},
{
    img: certified3,
},
{
    img: fire,
},
{
  img: certified1,
},
{
    img: certified4,
},
{
    img: environmental,
}
]
