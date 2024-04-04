import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../asset/images/Slider_Img/slider1.jpg";
import slider2 from "../../asset/images/Slider_Img/slider2.jpg";
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
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item-fixed-height">
        <img
          className="d-block w-100"
          src={slider1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    </>
  )
}

export default PageSlider