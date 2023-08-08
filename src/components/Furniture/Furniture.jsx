import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import furniture1 from "../../asset/images/Concern/Furniture/01.jpg";
import furniture2 from "../../asset/images/Concern/Furniture/02.jpg";
import furniture3 from "../../asset/images/Concern/Furniture/03.jpg";
import furniture4 from "../../asset/images/Concern/Furniture/04.jpg";
import furniture5 from "../../asset/images/Concern/Furniture/05.jpg";
import furniture6 from "../../asset/images/Concern/Furniture/06.jpg";
import furniture7 from "../../asset/images/Concern/Furniture/07.jpg";
import furniture8 from "../../asset/images/Concern/Furniture/08.jpg";
// import { Blurhash } from "react-blurhash";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import "./Furniture.css"
import Spinner from "../Spinner/Spinner.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Furniture = () => {

  //   const [imgLoad, setImgLoad] = useState(false);
  
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


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return (
    <>

    {
      loading ? (<Spinner />) :(
         
   <Container style={{ marginTop: "5rem", marginBottom: "7rem" }}>
   <Row>
              <Col sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "justify" }}>
                <p className='plasticText'>
                  Talukder furniture is extremely resilient and requires very little
                  maintenance if the woods are seasoned methodically. Wood is a
                  long-lasting natural material that can withstand constant abuse,
                  whether it's spills in the kitchen or scratches in the dining room.
                  Solid wood furniture can last for generations imparting an antique
                  value. Owing to their below enlisted attributes office furniture made from
                  wood and particle board, these products are highly appreciated
                  and accepted by our corporate clients and very coveted in the
                  markets of entire Bangladesh.

                  <br /> <br />

                  <ul>
                    <li>
                      <a>Dimensional accuracy</a>
                    </li>
                    <li>
                      <a> Rigid construction</a>
                    </li>
                    <li>
                      <a>  Corrosion resistance </a>
                    </li>
                    <li>
                      <a> Easy to use, Chemical resistance </a>
                    </li>
                    <li>
                      <a> Lower weight to space ratio
                      </a>
                    </li>
                  </ul>
                </p>
              </Col>           
   </Row>

   <Row className="TgImageGallery" style={{ marginTop: "3rem" }}>
              {/* <Col style={{ marginTop: "3rem" }}> */}
              {itemData.map((item) => (
                <Col key={item.title} lg={3} md={4} sm={6}>
                  <div>
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

export default Furniture


const itemData = [
    {
      img: furniture1,
    },
    {
      img: furniture2,
    },
    {
      img: furniture3,
    },
    {
      img: furniture4,
    },
    {
      img: furniture5,
    },
    {
      img: furniture6,
    },
    {
      img: furniture7,
    },
    {
      img: furniture8,
    },
  ];
  