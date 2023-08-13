import React, { useState, useEffect } from "react";
import "./Plastic.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import plastic1 from "../../asset/images/Concern/Plastics/01.jpg";
import plastic2 from "../../asset/images/Concern/Plastics/02.jpg";
import plastic3 from "../../asset/images/Concern/Plastics/03.jpg";
import plastic4 from "../../asset/images/Concern/Plastics/04.jpg";
import plastic5 from "../../asset/images/Concern/Plastics/05.jpg";
import plastic6 from "../../asset/images/Concern/Plastics/06.jpg";
import plastic7 from "../../asset/images/Concern/Plastics/07.jpg";
import plastic8 from "../../asset/images/Concern/Plastics/08.jpg";
import { Blurhash } from "react-blurhash";
//const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj",32,32)
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import Spinner from "../Spinner/Spinner.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { decode } from "blurhash";

const Plastic = () => {

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

  return (
    <>

{loading ? (
        <Spinner />
      ) : (
      <Container>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={12}
            style={{ textAlign: "justify" }}
          >

            <p style={{ marginTop: "5rem", marginBottom: "3rem" }} className="plasticText">
              Now a days essence and use of plastic products knows no bound,
              Plastic furniture becomes the first choice of mass people against
              their requirement, whether it is for our home patio, workplace or
              even places such as restaurant and garden. Now, if you are
              thinking that furniture made from plastic have cheap material
              having lower mechanical & physical strength, then you are not
              aware of all kinds of benefits associated with high quality
              plastic furniture, which is not only long-lasting but elegant in
              looks. The benefits of plastic furniture are given below:
              <br /> <br />
              <ul>
                <li>
                  <a>Virtually maintenance free</a>
                </li>
                <li>
                  <a> Eco-friendly</a>
                </li>
                <li>
                  <a> Affordable yet stylish </a>
                </li>
                <li>
                  <a> Mobility </a>
                </li>
                <li>
                  <a> Long-lasting </a>
                </li>
                <li>
                  <a> Waterproof and safe under open sky </a>
                </li>
              </ul>
            </p>
          </Col>
     </Row>

            <Row className="TgImageGallery" style={{ marginTop: "1rem" }}>
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
      )}
    </>
  );
};

export default Plastic;

const itemData = [
  {
    img: plastic1,
  },
  {
    img: plastic2,
  },
  {
    img: plastic3,
  },
  {
    img: plastic4,
  },
  {
    img: plastic5,
  },
  {
    img: plastic6,
  },
  {
    img: plastic7,
  },
  {
    img: plastic8,
  },
];

   {/* <ImageList cols={4}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    style={{ height: "320px" }}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList> */}

            
// const Plastic = () => {
//   const [imgLoad, setImgLoad] = useState(false);
//   useEffect(() => {
//     const img = new Image();
//     img.onload = () => {
//       setImgLoad(true);
//     };
//   }, []);
//   return (
//     <>
//       <Container>
//         <Row>
//           <Col
//             sm={12}
//             md={12}
//             lg={12}
//             style={{ marginTop: "4rem", textAlign: "justify" }}
//           >
//             <p>
//               Now a days essence and use of plastic products knows no bound,
//               Plastic furniture becomes the first choice of mass people against
//               their requirement, whether it is for our home patio, workplace or
//               even places such as restaurant and garden. Now, if you are
//               thinking that furniture made from plastic have cheap material
//               having lower mechanical & physical strength, then you are not
//               aware of all kinds of benefits associated with high quality
//               plastic furniture, which is not only long-lasting but elegant in
//               looks. The benefits of plastic furniture are given below:
//               <br /> <br />
//               <ul>
//                 <li>
//                   <a>Virtually maintenance free</a>
//                 </li>
//                 <li>
//                   <a> Eco-friendly</a>
//                 </li>
//                 <li>
//                   <a> Affordable yet stylish </a>
//                 </li>
//                 <li>
//                   <a> Mobility </a>
//                 </li>
//                 <li>
//                   <a> Long-lasting </a>
//                 </li>
//                 <li>
//                   <a> Waterproof and safe under open sky </a>
//                 </li>
//               </ul>
//             </p>
//           </Col>

//           <Col style={{ marginTop: "3rem" }} sm={12} md={12} lg={12}>
         

//             <ImageList cols={4}>
//               {itemData.map((item) => (
//                 <ImageListItem key={item.img}>
//                   <div style={{ display: imgLoad ? "none" : "inline" }}>
//                     <Blurhash
//                       hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
//                       width={200}
//                       height={300}
//                       resolutionX={32}
//                       resolutionY={32}
//                       punch={1}
//                     />
//                   </div>
//                   <img
//                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                     style={{ display: !imgLoad ? "none" : "inline" }}
//                     alt={item.title}
//                     loading="lazy"
//                     onLoad={() => setImgLoad(true)}
//                   />
//                 </ImageListItem>
//               ))}
//             </ImageList>

//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Plastic;
