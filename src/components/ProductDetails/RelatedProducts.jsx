import React from 'react'
import productList from "../Portfolio/PortfolioImgApi.jsx";
import { Link } from 'react-router-dom';
import {Container, Row, Col, Button } from "react-bootstrap";
import "./ProductDetails.css"
import Slider from "react-slick";

const RelatedProducts = (props) => {

    const { id, category } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900,
        pauseOnHover: false,
        cssEase: "ease-in-out",
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: true,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
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
            <div className='container relatedProductInfo'>
                <p>Related Products</p>
                <p>Category: {category}</p>
            </div>

            <div className='container'>   
                <Slider {...settings}>
                {
                      productList.filter(item=>{
                        if(item.category == category){
                            return true;
                        }
                      }).map(item=>{
                        return(
                        
                        <div className="related-portfolio-item"
                             key={item.id}>
                              <div className='nov'>
            
                          <img
                            className="related-portfolio-item-img"
                            src={`${item.imgSrc}`}
                            alt={item.title}
                            style={{ cursor: "pointer" }}
                          />

                          <div style={{ marginTop: "10px", width: "100%" }}>
                            {item.title && (
                              <p style={{ marginLeft: "10px" }} className="itemTitle">
                                <strong>Name : </strong>
                                <span style={{ textTransform: "uppercase" }}>
                                  {" "}
                                  {item.title}{" "}
                                </span>
                              </p>
                            )}

                            {item.button && (
                              <div style={{ marginLeft: "10px" }}>
                                {/* <UpvcModal1 title={item.title} category={item.category} code={item.longCode} size={item.longSize} thickness={item.longThickness} img={item.imgSrc} /> */}
                                {/* <Link to={`/product/productDetailsPage/${item.id}`}> */}
                                <Link to={`/product/${item.category}/${item.id}`}>
                                  <Button style={{marginBottom:"20px"}} className="me-2 mb-2 upvcBtn"> Details </Button>
                                </Link>
                              </div>
                            )}

                          </div>
                          </div>
                          </div>
                        )
                      })
                }
                </Slider>

            </div>
        </>
    )
}

export default RelatedProducts
