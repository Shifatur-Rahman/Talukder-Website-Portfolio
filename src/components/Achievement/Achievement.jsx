import React, { useState, useEffect } from "react";
import "./Achievement.css";
import achievement1Img from "../../asset/images/achievements/01.jpg";
import achievement2Img from "../../asset/images/achievements/02.jpg";
import achievement3Img from "../../asset/images/achievements/03.jpg";
import achievement4Img from "../../asset/images/achievements/04.jpg";
import achievement5Img from "../../asset/images/achievements/05.jpg";
import awards1Img from "../../asset/images/achievements/awards1.jpg";
import awards2Img from "../../asset/images/achievements/awards2.jpg";
import awards3Img from "../../asset/images/achievements/awards3.jpg";
import awards4Img from "../../asset/images/achievements/awards4.jpg";
// import awards5Img from "../../asset/images/achievements/awards5.png";
// import awards6Img from "../../asset/images/achievements/awards6.png";
import awards7Img from "../../asset/images/achievements/awards7.jpg";
// import awards8Img from "../../asset/images/achievements/awards8.png";
// import awards9Img from "../../asset/images/achievements/awards9.png";
// import awards10Img from "../../asset/images/achievements/awards10.png";
import awards11Img from "../../asset/images/achievements/awards11.jpg";
// import awards12Img from "../../asset/images/achievements/awards12.png";
import awards13Img from "../../asset/images/achievements/awards13.jpg";
import awards14Img from "../../asset/images/achievements/awards14.jpg";
import awards15Img from "../../asset/images/achievements/awards15.jpg";
// import awards16Img from "../../asset/images/achievements/awards16.png";
//import awards17Img from "../../asset/images/achievements/awards17.png";
// import awards18Img from "../../asset/images/achievements/awards18.png";
// import awards19Img from "../../asset/images/achievements/awards19.png";
// import awards20Img from "../../asset/images/achievements/awards20.png";
import awards21Img from "../../asset/images/achievements/awards21.jpg";
import { Col, Container, Row, Card } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Achievement = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
        {loading ? (
        <Spinner />
      ) :
      
      <Container style={{ marginTop: "3rem", marginBottom: "7rem" }}>
          <Row style={{ marginTop: "5rem" }}>
            <div data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="award">
              <ul className="awardList">
                <li>
                  Talukder Group of Industries has won numerous awards for its
                  contributions to Bangladesh's industrial sector.
                </li>
                <li>
                  Talukder Group of Industries has been recognized for its
                  contributions to social development.
                </li>
                <li>
                  Talukder Group of Industries has been recognized for its
                  commitment to quality and innovation.
                </li>
                <li>
                  Talukder Group has also been recognized for its contributions to
                  the development of rural communities.
                </li>
                <li>
                  The group's plastics division has won awards for its commitment
                  to environmental sustainability, including the recycling of
                  plastic waste and the use of eco-friendly materials.
                </li>
                <li>
                  Talukder Group has also been recognized for its contributions to
                  the development of rural communities.
                </li>

                <li>
                  Now Talukder Group is a successful brand name as well as a
                  flagship corporate name in corporate world with great
                  achievement.
                </li>
                <li>
                  Overall, Talukder Group of Industries' awards and achievements
                  reflect its commitment to excellence, innovation,
                  sustainability, and social responsibility across a range of
                  sectors, making it one of Bangladesh's most respected and
                  successful business groups.
                </li>
              </ul>
            </div>
          </Row>
          

          
         
          <Row className="TgImageGallery" style={{ marginTop: "3rem" }}>
            {achievementImg.map((item) => (
              <Col key={item.title} lg={3} md={4} sm={6}>
                <div 
                  // data-aos="zoom-out"
                  // data-aos-easing="linear"
                  // data-aos-duration="1000"
                  >
                  <Card className="ManagementCard">
                    <LazyLoadImage
                      className="achievementCardImg"
                      variant="top"
                      src={item.img}
                      alt={item.title}
                    />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>

          </Container>

      
}
    </>
  );
};

export default Achievement;

const achievementImg = [
  {
    img: achievement1Img,
  },
  {
    img: achievement2Img,
  },
  {
    img: achievement3Img,
  },
  {
    img: achievement4Img,
  },
  {
    img: achievement5Img,
  },
  {
    img: awards1Img
  },
  {
    img: awards2Img
  },
  {
    img: awards3Img
  },
  {
    img: awards4Img
  },
  // {
  //   img: awards5Img
  // },
  // {
  //   img: awards6Img
  // },
  {
    img: awards7Img
  },
  // {
  //   img: awards8Img
  // },
  // {
  //   img: awards9Img
  // },
  // {
  //   img: awards10Img
  // },
  {
    img: awards11Img
  },
  // {
  //   img: awards12Img
  // },
  {
    img: awards13Img
  },
  {
    img: awards14Img
  },
  {
    img: awards15Img
  },
  // {
  //   img: awards16Img
  // },
  // {
  //   img: awards17Img
  // },
  // {
  //   img: awards18Img
  // },
  // {
  //   img: awards19Img
  // },
  // {
  //   img: awards20Img
  // },
  {
    img: awards21Img
  },
]     
