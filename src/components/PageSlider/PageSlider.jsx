import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../asset/images/PageTop Slider/slider3.jpg";
import slider2 from "../../asset/images/PageTop Slider/slider1.jpg";
import Button from 'react-bootstrap/Button';
import "./PageSlider.css"

const PageSlider = () => {
  return (
    <>
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
    </>
  )
}

export default PageSlider