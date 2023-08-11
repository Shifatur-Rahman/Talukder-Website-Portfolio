import React from 'react'
import "./Certified.css"
import { useState, useEffect } from "react";
import { Col, Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import Spinner from "../Spinner/Spinner.jsx";

import certified1 from "..//..//asset/images/Certified/aaa-2.png"
import certified2 from "..//..//asset/images/Certified/Bsti.png"
import certified3 from "..//..//asset/images/Certified/certified.png"
import certified4 from "..//..//asset/images/Certified/buetLogo.png"


const Certified = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3200);
    }, []);
  
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
    
    {loading ? (
        <Spinner />
      ) : (
        <Container style={{ marginTop: "5rem", marginBottom: "1rem" }}>
          <Slider {...settings}>
            {certifiedData.map((item, index) => (
              <Col className="clientCard" sm={12} md={6} lg={4} key={item.id}>
                <Card
                  data-aos="fade-down"
                  style={{
                    height: "180px",
                    width: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #92CCE9",
                    boxShadow: "1px 1px 5px #92CCE9",
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
      )}    
    
    
    </>
  )
}

export default Certified


const certifiedData = [

{
    img: certified1,
},
{
    img: certified2,
},
{
    img: certified3,
},
{
    img: certified4,
},
{
    img: certified1,
},
{
    img: certified2,
},
{
    img: certified4,
}

]