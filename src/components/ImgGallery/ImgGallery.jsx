import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import gallery1 from "../../asset/images/gallery/gallery1.jpg";
import gallery4 from "../../asset/images/gallery/gallery4.jpg";
import gallery5 from "../../asset/images/gallery/gallery5.jpg";
import gallery6 from "../../asset/images/gallery/gallery6.jpg";
import gallery7 from "../../asset/images/gallery/gallery7.jpg";
import gallery8 from "../../asset/images/gallery/gallery8.jpg";
import gallery9 from "../../asset/images/gallery/gallery9.jpg";
import gallery10 from "../../asset/images/gallery/gallery10.jpg";
import gallery11 from "../../asset/images/gallery/gallery11.jpg";
import gallery12 from "../../asset/images/gallery/gallery12.jpg";
import gallery13 from "../../asset/images/gallery/gallery13.jpg";
import gallery14 from "../../asset/images/gallery/gallery14.jpg";
import gallery15 from "../../asset/images/gallery/gallery15.jpg";
import gallery16 from "../../asset/images/gallery/gallery16.jpg";
import gallery17 from "../../asset/images/gallery/gallery17.jpg";
import gallery18 from "../../asset/images/gallery/gallery18.jpg";
import gallery19 from "../../asset/images/gallery/gallery19.jpg";
import gallery20 from "../../asset/images/gallery/gallery20.jpg";
import gallery21 from "../../asset/images/gallery/gallery21.jpg";
import gallery22 from "../../asset/images/gallery/gallery22.jpg";
import gallery23 from "../../asset/images/gallery/gallery23.jpg";
import gallery24 from "../../asset/images/gallery/gallery24.jpg";
import gallery25 from "../../asset/images/gallery/gallery25.jpg";
import gallery26 from "../../asset/images/gallery/gallery26.jpg";
import gallery27 from "../../asset/images/gallery/gallery27.jpg";
import gallery28 from "../../asset/images/gallery/gallery28.jpg";
import gallery29 from "../../asset/images/gallery/gallery29.jpg";
import gallery30 from "../../asset/images/gallery/gallery30.jpg";
import gallery31 from "../../asset/images/gallery/gallery31.jpg";
import gallery32 from "../../asset/images/gallery/gallery32.jpg";
import gallery33 from "../../asset/images/gallery/gallery33.jpg";
import gallery34 from "../../asset/images/gallery/gallery34.jpg";
import gallery35 from "../../asset/images/gallery/gallery35.jpg";
import gallery36 from "../../asset/images/gallery/gallery36.jpg";
import gallery37 from "../../asset/images/gallery/gallery37.jpg";
import gallery38 from "../../asset/images/gallery/gallery38.jpg";
import gallery39 from "../../asset/images/gallery/gallery39.jpg";
import gallery40 from "../../asset/images/gallery/gallery40.jpg";
import gallery41 from "../../asset/images/gallery/gallery41.jpg";
import gallery42 from "../../asset/images/gallery/gallery42.jpg";
import gallery43 from "../../asset/images/gallery/gallery43.jpg";
import gallery44 from "../../asset/images/gallery/gallery44.jpg";
import gallery45 from "../../asset/images/gallery/gallery45.jpg";
import gallery46 from "../../asset/images/gallery/gallery46.jpg";
// import gallery47 from "../../asset/images/gallery/gallery47.jpg";

import "./ImgGallery.css";
import Spinner from "../Spinner/Spinner.jsx";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from "react-blurhash";
import { Col, Container, Row, Card } from "react-bootstrap";

const ImgGallery = () => {

  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleImageClick = (item) => {
    setSelectedImage(item);
  };
  
  const handleDialogClose = () => {
    setSelectedImage(null);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3700);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="TgImageGallery">
        <Container style={{ marginTop: "5rem", marginBottom: "7rem" }}>
            <div>
            <ImageList
            className="ImageGallery"
            sx={{ width: "100%", height: "auto", overflow: "hidden" }}
            variant="woven"
            cols={4}
            gap={6}
          >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.id}
                  onClick={() => handleImageClick(item)}
                >
                  <div className="galleryImg">
                    <LazyLoadImage
                      src={`${item.img}?w=161&fit=crop&auto=format`} // Add "/compressed" to the image source URL
                      srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} // Add "/compressed" to the image source URL
                      alt={item.title}
                      loading="lazy"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </ImageListItem>
              ))}
                </ImageList>
            </div>
     
            <Dialog open={Boolean(selectedImage)} onClose={handleDialogClose}>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
              <DialogContent>
                <IconButton
                  sx={{ position: "absolute", top: 0, right: 0 }}
                  onClick={handleDialogClose}
                >
                  <CloseIcon />
                </IconButton>
                <img
                  className="zoomImage"
                  src={`${selectedImage?.img}?w=500&fit=crop&auto=format`}
                  srcSet={`${selectedImage?.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                  alt={selectedImage?.title}
                />
              </DialogContent>
            </Dialog>

        </Container>
        </div>
      )}
    </>
  );
};

export default ImgGallery;

const itemData = [
  {
    id: 1,
    img: gallery1,
    title: "Dhaka International Trade Fair",
  },
  {
    id: 2,
    img: gallery4,
    title: "Customers Visit Our Showroom ",
  },
  {
    id: 3,
    img: gallery14,
    title: "Customer Satisfiction",
  },
  {
    id: 4,
    img: gallery9,
    title: "Talukder Plastic",
  },
  {
    id: 5,
    img: gallery5,
    title: "uPVC Factory",
  },
  {
    id: 6,
    img: gallery6,
    title: "Factory",
  },
  {
    id: 7,
    img: gallery7,
    title: "Our Production",
  },
  {
    id: 8,
    img: gallery8,
    title: "Goods are ready",
  },

  {
    id: 9,
    img: gallery10,
    title: "Storage",
  },
  {
    id: 10,
    img: gallery17,
    title: "Machine",
  },
  {
    id: 11,
    img: gallery11,
    title: "uPVC Machine",
  },
  {
    id: 12,
    img: gallery12,
    title: "uPVC Factory",
  },
  {
    id: 13,
    img: gallery13,
    title: "Raw Materials",
  },
  {
    id: 14,
    img: gallery16,
    title: "Jashore Depot",
  },
  {
    id: 15,
    img: gallery15,
    title: "Our Goods",
  },
  {
    id: 16,
    img: gallery18,
    title: "Our Benches",
  },

  //  additional image
  {
    id: 17,
    img: gallery19,
    title: "Machinery & equipment",
  },
  {
    id: 18,
    img: gallery20,
    title: "Our Factory",
  },
  {
    id: 19,
    img: gallery21,
    title: "Plastic & uPVC Building",
  },
  {
    id: 20,
    img: gallery22,
    title: "Machinery & equipment",
  },
  {
    id: 21,
    img: gallery23,
    title: "Machinery & equipment",
  },
  {
    id: 22,
    img: gallery24,
    title: "uPVC unit",
  },
  {
    id: 23,
    img: gallery25,
    title: "Furniture unit",
  },
  {
    id: 24,
    img: gallery26,
    title: "uPVC unit",
  },
  {
    id: 25,
    img: gallery27,
    title: "Our Benches",
  },
  {
    id: 26,
    img: gallery28,
    title: "Machinery & equipment",
  },
  {
    id: 27,
    img: gallery29,
    title: "Plastic Section",
  },
  {
    id: 28,
    img: gallery30,
    title: "Plastic Section",
  },

  {
    id: 29,
    img: gallery31,
    title: "Machinery & equipment",
  },
  {
    id: 30,
    img: gallery32,
    title: "Machinery & equipment",
  },
  {
    id: 31,
    img: gallery33,
    title: "Machinery & equipment",
  },
  {
    id: 32,
    img: gallery34,
    title: "Machinery & equipment",
  },
  {
    id: 33,
    img: gallery35,
    title: "Machinery & equipment",
  },
  {
    id: 34,
    img: gallery36,
    title: "Machinery & equipment",
  },
  {
    id: 35,
    img: gallery37,
    title: "Our Benches",
  },
  {
    id: 36,
    img: gallery38,
    title: "Our Benches",
  },
  {
    id: 37,
    img: gallery39,
    title: "uPVC unit",
  },
  {
    id: 38,
    img: gallery40,
    title: "Moulding Machine",
  },
  {
    id: 39,
    img: gallery41,
    title: "Moulding Machine",
  },
  {
    id: 40,
    img: gallery42,
    title: "uPVC Pipe",
  },
  {
    id: 41,
    img: gallery43,
    title: "Assembly Unit",
  },
  {
    id: 42,
    img: gallery44,
    title: "Color Unit",
  },
  {
    id: 43,
    img: gallery45,
    title: "Machinery & equipment",
  },
  {
    id: 44,
    img: gallery46,
    title: "Our Prodction Capacity",
  },
];


   {/* <ImageList
            className="ImageGallery"
            sx={{ width: "100%", height: "auto", overflow: "hidden" }}
            variant="woven"
            cols={4}
            gap={6}
          >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.id}
                  onClick={() => handleImageClick(item)}
                >
                  <div className="galleryImg">
                    <LazyLoadImage
                      src={`${item.img}/compressed?w=161&fit=crop&auto=format`} // Add "/compressed" to the image source URL
                      srcSet={`${item.img}/compressed?w=161&fit=crop&auto=format&dpr=2 2x`} // Add "/compressed" to the image source URL
                      alt={item.title}
                      loading="lazy"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </ImageListItem>
              ))}

                </ImageList> */}


            {/*  <ImageList
                className="ImageGallery"
                sx={{ width: "100%", height: "auto", overflow: "hidden" }}
                variant="woven"
                cols={4}
              >
                {itemData.map((item) => (
                  <ImageListItem style={{ cursor: "pointer" }}
                    key={item.img}
                    onClick={() => handleImageClick(item)}
                  >
                    {imgLoad ? (
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%" }}>
                        <Blurhash
                          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                          //  width={200}
                          //  height={300}
                          resolutionX={32}
                          resolutionY={32}
                          punch={1}
                        />
                      </div>
                    )}
                  </ImageListItem>
                ))}
              </ImageList> */}
              