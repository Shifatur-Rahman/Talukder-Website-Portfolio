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
              