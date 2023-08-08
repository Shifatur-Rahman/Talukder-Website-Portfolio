import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "./ClientReview.css";
import client1 from "../../asset/images/Client_logo/newzeland-dairy.jpg";
import client2 from "../../asset/images/Client_logo/olympic-industries-ltd.jpg";
import client3 from "../../asset/images/Client_logo/RSPL-Health-BD-Ltd.jpg";
import client4 from "../../asset/images/Client_logo/protik.jpg";
import client5 from "../../asset/images/Client_logo/globe.jpg";
import client6 from "../../asset/images/Client_logo/icp.jpg";
import client7 from "../../asset/images/Client_logo/mamtaj.jpg";
import client8 from "../../asset/images/Client_logo/kallol.jpg";
import client9 from "../../asset/images/Client_logo/opsnion.jpg";
import client10 from "../../asset/images/Client_logo/finis.jpg";
import client11 from "../../asset/images/Client_logo/ifad.jpg";
import client12 from "../../asset/images/Client_logo/danish.jpg";
import client13 from "../../asset/images/Client_logo/bashundhara.jpg";
import client14 from "../../asset/images/Client_logo/quazi.jpg";
import client15 from "../../asset/images/Client_logo/keya.jpg";
import client16 from "../../asset/images/Client_logo/bengal_biscuits.jpg";
import client17 from "../../asset/images/Client_logo/fuWang.jpg";
import client20 from "../../asset/images/Client_logo/unicef.jpg";
import client21 from "../../asset/images/Client_logo/hysawa.jpg";
import client22 from "../../asset/images/Client_logo/csa.jpg";
import Spinner from "../Spinner/Spinner.jsx";

const ClientReview = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
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
        <Container style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <Slider {...settings}>
            {corporateClientData.map((item, index) => (
              <Col className="clientCard" sm={12} md={6} lg={4} key={item.id}>
                <Card
                  data-aos="fade-down"
                  style={{
                    height: "160px",
                    width: "140px",
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
  );
};

export default ClientReview;

const corporateClientData = [
  {
    img: client1,
  },
  {
    img: client2,
  },
  {
    img: client3,
  },
  {
    img: client4,
  },
  {
    img: client5,
  },
  {
    img: client6,
  },
  {
    img: client7,
  },
  {
    img: client8,
  },
  {
    img: client9,
  },
  {
    img: client10,
  },
  {
    img: client11,
  },
  {
    img: client12,
  },
  {
    img: client13,
  },
  {
    img: client14,
  },
  {
    img: client15,
  },
  {
    img: client16,
  },
  {
    img: client17,
  },
  {
    img: client20,
  },
  {
    img: client21,
  },
  {
    img: client22,
  },
];
