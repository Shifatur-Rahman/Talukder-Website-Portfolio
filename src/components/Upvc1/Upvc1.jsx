import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import "./Upvc1.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import upvc1 from "../../asset/images/Concern/Upvc/01.jpg";
import upvc2 from "../../asset/images/Concern/Upvc/02.jpg";
import upvc3 from "../../asset/images/Concern/Upvc/03.jpg";
import upvc4 from "../../asset/images/Concern/Upvc/04.jpg";
import upvc5 from "../../asset/images/Concern/Upvc/05.png";
import upvc6 from "../../asset/images/Concern/Upvc/06.jpg";
import upvc7 from "../../asset/images/Concern/Upvc/07.jpg";
import upvc8 from "../../asset/images/Concern/Upvc/08.jpg";
import { Blurhash } from "react-blurhash";
import Spinner from "../Spinner/Spinner.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Upvc1 = () => {
  
const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

// const [imgLoad, setImgLoad] = useState(false);
  
//   useEffect(() => {
//     const imgPromises = itemData.map((item) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => resolve();
//         img.onerror = () => reject();
//         img.src = item.img;
//       });
//     });

//     Promise.all(imgPromises)
//       .then(() => setImgLoad(true))
//       .catch(() => setImgLoad(true));
//   }, []);

  return (
    <>
      {
        loading ? (<Spinner />) : (
          <Container style={{ marginTop: "5rem", marginBottom: "7rem" }}>
            <Row>

              <Col sm={12} md={12} lg={12} style={{ textAlign: "justify" }}>
                <p className='plasticText'>
                  UPVC pipes and fittings are an excellent choice for plumbing
                  requiring high tensile and impact strength. They are made of
                  durable unplasticized plastic material that does not corrode or
                  crack easily under adverse environment and lasts for a long time, even with zero maintenance, compared to that of metal
                  alternatives. Here are some more details on the benefits and features of UPVC pipes:
                  <br /> <br />
                  <ul>
                    <li><a> <b>High Tensile and Impact Strength: </b> UPVC pipes have impressive tensile and impact strength, making them suitable for both above-ground and underground plumbing systems. They can withstand high pressure and resist damage from external impacts, ensuring reliable performance over an extended period. </a></li>
                    <li><a> <b>Corrosion Resistance:</b> Unlike metal pipes, UPVC pipes are immune to corrosion, rust and chemical reactions. They are not affected by aggressive substances commonly found in soil, water, or chemicals present in various plumbing applications. This resistance to corrosion ensures the longevity and durability of UPVC pipes, reducing the need for frequent replacements. </a></li>
                    <li><a>  <b>Leak-Free Joints:</b> UPVC pipes come with various jointing techniques that provide secure and leak-free connections. Solvent cement joints are commonly used, which create a strong bond between pipe and fittings, ensuring a reliable and durable plumbing system. </a></li>
                  </ul>
                </p>
              </Col>
              </Row>



              <Row className="TgImageGallery" style={{ marginTop: "3rem" }}>
              {/* <Col style={{ marginTop: "3rem" }}> */}
              {itemData.map((item) => (
                <Col key={item.title} lg={3} md={4} sm={6}>
                  <div
                  // data-aos="zoom-out"
                  // data-aos-easing="linear"
                  // data-aos-duration="1000"
                  >
                    <Card className="concernCard">
                      <LazyLoadImage
                        className="concernCardImg"
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
        )
      }
    </>
  )
}

export default Upvc1

const itemData = [
  {
    img: upvc4,
  },
  {
    img: upvc3,
  },
  {
    img: upvc2,
  },
  {
    img: upvc5,
  },
  {
    img: upvc6,
  },
  {
    img: upvc1,
  },
  {
    img: upvc8,
  },
  {
    img: upvc7,
  },
];
