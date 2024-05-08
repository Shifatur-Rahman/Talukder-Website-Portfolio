import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../asset/images/PageTop Slider/slider1.jpg";
import slider2 from "../../asset/images/PageTop Slider/slider2.jpg";
import slider3 from "../../asset/images/PageTop Slider/slider3.jpg";
import slider4 from "../../asset/images/PageTop Slider/slider4.jpg";
import slider5 from "../../asset/images/PageTop Slider/slider5.jpg";
import slider6 from "../../asset/images/PageTop Slider/slider6.jpg";
import slider7 from "../../asset/images/PageTop Slider/slider7.jpg";
import slider8 from "../../asset/images/PageTop Slider/slider8.jpg";
import "./PageSlider.css"

const PageSlider = () => {
  return (
    <>

    <Carousel data-bs-theme="dark" style={{backgroundColor:"#f2f2f2"}}>
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
          src={slider3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider4}
          alt="Four slide"
        />
      </Carousel.Item>

      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider5}
          alt="Five slide"
        />
      </Carousel.Item>

      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider6}
          alt="Six slide"
        />
      </Carousel.Item>

      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider7}
          alt="Six slide"
        />
      </Carousel.Item>

      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider8}
          alt="Six slide"
        />
      </Carousel.Item>

    </Carousel>
    
    </>
  )
}
export default PageSlider