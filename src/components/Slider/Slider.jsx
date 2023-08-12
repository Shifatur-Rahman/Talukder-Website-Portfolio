import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Slider.css";
import slider1 from "../../asset/images/Slider_Img/slider1.jpg";
import slider2 from "../../asset/images/Slider_Img/slider2.jpg";
import slider3 from "../../asset/images/Slider_Img/slider3.jpg";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import KnowUs from "../../components/KnowUs/KnowUs";
import Summary from "../../components/Summary/Summary";
import AOS from "aos";
import Certified from "../Certified/Certified";

const Slider = () => {
  const Summaryref = useRef(null);
  const LearnMoreref = useRef(null);

  const images = [
    {
      src: slider1,
      alt: "Talukder Plastic Factory",
      para: "Our Brand is Yours",
      src2: "https://mdbcdn.b-cdn.net/img/video/Tropical.mp4",
    },
    {
      src: slider2,
      alt: "Talukder Products Best In Quality",
      para: "For Quality Life",
      src2: "https://mdbcdn.b-cdn.net/img/video/forest.mp4",
    },
    {
      src: slider3,
      // alt: "House Hold Products",
      alt: "Talukder Furniture",
      para: "Better Design & Right Choice For Office",
      src2: "https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4",
      // para: "Better Design & Right Choice For Kitchen",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Change the image after every 2 seconds
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  let handleClick = () => {
    if (Summaryref.current) {
      Summaryref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  let handleKnowClick = () => {
    if (LearnMoreref.current) {
      LearnMoreref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 1500,
      disable: false,
      once: false,
      mirror: false,
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
      useClassNames: false,
    });
  }, []);

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={1000}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <CSSTransition
              in={activeIndex === index}
              timeout={1000}
              classNames="fade"
            >
              <img
                className="sliderImg d-block w-100"
                src={image.src}
                alt={image.alt}
              />
            </CSSTransition>

            <div className="carousel-overlay">
              <Carousel.Caption>
                <h3
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                  className="topBannerTitle"
                >
                  {image.alt}
                </h3>
                <p
                  data-aos="fade-down"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                  className="topBannerSubTitle"
                >
                  {image.para}
                </p>
                {/* <div class="button-container">
                  <Button
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500"
                    onClick={handleClick}
                    // className="serviceBtn btn-block btn-lg mt-3"
                    className="btn-button button_color"
                    style={{ marginRight: "20px" }}
                   // variant="info"
                  >
                    Our Services
                  </Button>
                  
                  <Button
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500"
                    onClick={handleKnowClick}
                    className="btn-button button_transparent"
                   //  className="learnBtn btn-block btn-lg mt-3"
                   // variant="outline-light"
                  >
                    Learn More
                  </Button>
                </div> */}

                <div className="banner_content">
                    <ul>
                        <li><a onClick={handleClick} className="btn-button button-color">Our Services</a></li>
                        <li><a onClick={handleKnowClick} className="btn-button button-transparent">Learn More</a></li>
                    </ul>
                </div>

              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <Certified /> */}
      <KnowUs ref={LearnMoreref} />
      <Summary ref={Summaryref} />
    </>
  );
};

export default Slider;
