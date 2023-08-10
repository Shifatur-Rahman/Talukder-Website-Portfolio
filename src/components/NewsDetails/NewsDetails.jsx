import React from "react";
import "./NewsDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Card } from "react-bootstrap";
import news1 from "../../asset/images/news/news1.jpg";
import news2 from "../../asset/images/news/news2.jpg";
import news3 from "../../asset/images/news/news3.jpg";
import news4 from "../../asset/images/news/news4.jpg";
import news5 from "../../asset/images/news/news5.jpg";
import news6 from "../../asset/images/news/news6.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import "aos/dist/aos.css";
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const NewsDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          swipeToSlide: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipeToSlide: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container style={{ }}>
        <h1 className="knowusTitle">Recent News & Events</h1>
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <Col className="" sm={12} md={6} lg={4} key={item.id}>
              <div className="news">
              <Card
                className={`newsCard ${
                  index === newsItems.length - 1 ? "lastCard" : ""
                }`}
              >
                <Card.Img className="newsCardImg" variant="top" src={item.imageSrc} />
                <Card.Body>
                <h2 className="newsCardTitle">{item.title}</h2>

                  <p className="newsHeader" style={{ fontSize: "13px", color: "#1dc6ad" }}>
                    {" "}
                    <AiOutlineCalendar className="newsHeaderIcon"
                      // style={{ fontSize: "20px", color: "#17a2b8",marginBottom:"3px" }}
                    />{" "}
                    <span className="newsHeaderSpan">{item.date}</span>{" "}
                    
                    <span className="adminSpan"> <FaUser className="adminUser" /> Posted by Admin</span>
                  </p>
                  
                  <p
                    className="newsPara"
                    style={{ textAlign: "justify", fontSize: "12px" }}
                  >
                    {item.description}
                  </p>

                  {/* <p className="newsIconAdd">
                     Read More <BsFillArrowRightSquareFill className="newsIconAddRight" />
                  </p> */}

                </Card.Body>
              </Card>
              </div>
            </Col>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default NewsDetails;

const newsItems = [
  {
    id: 1,
    imageSrc: news1,
    title:
      "Talukder Group of Industries recently held a meeting to discuss strategies for achieving our targets for the upcoming year.",
    date: "January 26, 2020",
    description:
      "During the meeting, we reviewed our current performance and identified areas where improvements could be made.",
  },
  {
    id: 2,
    imageSrc: news2,
    title:
      "Talukder Group of Industries recently held a meeting to encourage collaboration and open communication with our employees.",
    date: "January 05, 2023",
    description:
      "Throughout the meeting, we encouraged open and honest communication among all participants.",
  },
  {
    id: 3,
    imageSrc: news3,
    title:
      "The recent visit of the Managing Director of Talukder Group of Industries to our new furniture factory was an exciting and memorable event. ",
    date: "May 07, 2023",
    description:
      "Overall, the visit was an eye-opening experience, and we came away with a greater appreciation for the complexity and sophistication of modern manufacturing.",
  },
  {
    id: 4,
    imageSrc: news4,
    title:
      "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
    date: "April 18, 2022",
    description:
      "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
  },
  {
    id: 5,
    imageSrc: news5,
    title:
      "The meeting was aimed at improving communication and collaboration between management and employees.",
    date: "May 13, 2023",
    description:
      "The employees were given the opportunity to ask questions and provide feedback on various aspects of their work, including working conditions, benefits, and opportunities for career growth and development.",
  },
  {
    id: 6,
    imageSrc: news6,
    title:
      "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
      date: "May 13, 2023",
    description:
      "Throughout the meeting, we encouraged open and honest communication among all participants.",
  },
];

