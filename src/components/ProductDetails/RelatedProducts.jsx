import React from 'react'
import productList from "../Portfolio/ProductApi.jsx";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
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

        <div className='relatedProductInfo'>
          <p className='relatedProductTitle'>Related <span style={{color:"#ff7d1a"}}> Products</span> </p>
          {/* <p className='relatedProductCategory'>Category: {category}</p> */}
          <p className='relatedProductSubTitle'>Stands for eco-friendly premium goods</p>
        </div> 

            <div className='container'>   
                <Slider {...settings} className="custom-slider">
                {
                      productList.filter(item=>{
                        if(item.category == category){
                            return true;
                        }
                      }).map(item=>{
                        return(
                        
                        <div className="related-portfolio-item"
                             key={item.id}>
                        <div className='related-portfolio-slider'>
                                     
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
                                    <Link to={`/product/${item.category}/${item.id}`}>
                                      <Button style={{ marginBottom: "20px", background: "#2980B9" }} className="me-2 mb-2 relatedBtn"> Details </Button>
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
