import React from "react";
import { useState, useEffect } from "react";
import "./Foundry.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import foundry1 from "../../asset/images/Concern/Foundry/01.jpg";
import foundry2 from "../../asset/images/Concern/Foundry/02.jpg";
import foundry3 from "../../asset/images/Concern/Foundry/03.jpg";
import foundry4 from "../../asset/images/Concern/Foundry/04.jpg";
import foundry5 from "../../asset/images/Concern/Foundry/05.jpg";
import foundry6 from "../../asset/images/Concern/Foundry/06.jpg";
import foundry7 from "../../asset/images/Concern/Foundry/07.jpg";
import foundry8 from "../../asset/images/Concern/Foundry/08.jpg";
// import { Blurhash } from "react-blurhash";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import Spinner from "../Spinner/Spinner.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Foundry = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  // const [imgLoad, setImgLoad] = useState(false);
  
  // useEffect(() => {
  //   const imgPromises = itemData.map((item) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.onload = () => resolve();
  //       img.onerror = () => reject();
  //       img.src = item.img;
  //     });
  //   });

  //   Promise.all(imgPromises)
  //     .then(() => setImgLoad(true))
  //     .catch(() => setImgLoad(true));
  // }, []);

  
  return <>
  
{
  loading ? ( <Spinner />) :
  (
   <Container style={{ marginTop: "5rem", marginBottom: "8rem" }}>
    <Row>
    <Col
            sm={12}
            md={12}
            lg={12}
            style={{ textAlign: "justify" }}
          >
            <p className='plasticText'>
            Talukder Foundry Ltd. is a prominent concern within the Talukder Group of Industries. Established in July 1973 by Mr. Nurul Islam Talukder, the foundry specializes in the manufacturing and production of various metal castings. With a strong vision of large-scale industrialization, Talukder Foundry has grown to become a leading player in the foundry industry.
            
            <br /> 
            <br /> 
            The foundry's operations involve the casting of metal components using advanced techniques and technologies. They utilize high-quality materials and employ skilled craftsmen to ensure the production of durable and reliable castings. Talukder Foundry is known for its expertise in providing castings for diverse applications, catering to the needs of different industries.
            The benefits of Talukder Foundry are given below:
              <br /> <br />
              

                  <ul>
                    <li>
                      <a>As part of the esteemed Talukder Group of Industries, Talukder Foundry contributes to the group's overall success and achievements. Through their dedication to serving stakeholders and partners, they have established themselves as a trusted and reliable partner in the manufacturing sector.</a>
                    </li>
                    <li>
                      <a> Over the years, Talukder Foundry has gained recognition for its commitment to quality, precision, and innovation. Their castings have found applications in sectors such as automotive, machinery, construction, and more. With a strong focus on meeting customer requirements and delivering superior products, Talukder Foundry has built a reputation for excellence in the foundry industry.</a>
                    </li>
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
  
  </>;

};

export default Foundry;


const itemData = [
  {
    img: foundry1,
  },
  {
    img: foundry2,
  },
  {
    img: foundry3,
  },
  {
    img: foundry4,
  },
  {
    img: foundry5,
  },
  {
    img: foundry6,
  },
  {
    img: foundry7,
  },
  {
    img: foundry8,
  },
];

