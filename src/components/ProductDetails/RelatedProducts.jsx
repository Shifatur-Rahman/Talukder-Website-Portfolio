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
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
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
              dots: true,
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
            <div className='container'>  
                <p>Related Products</p>
                <p>Category: {category}</p>
                <Slider {...settings}>
                {
                      productList.filter(item=>{
                        if(item.category == category){
                            return true;
                        }
                      }).map(item=>{
                        return(
                        
                        <div style={{marginRight:"20px", height:"500px"}}
                        className="portfolio-item"
                        key={item.id}>
            
                          <img
                            className="portfolio-item-img"
                            src={`${item.imgSrc}`}
                            alt={item.title}
                            style={{ cursor: "pointer" }}
                          />

                          <div style={{ marginTop: "10px", width: "100%", marginBottom: "35px" }}>

                            {item.title && (
                              <p style={{ marginLeft: "10px" }} className="itemTitle">
                                <strong>Name : </strong>
                                <span style={{ textTransform: "uppercase" }}>
                                  {" "}
                                  {item.title}{" "}
                                </span>
                              </p>
                            )}

                            {item.color && item.code ? (
                              <div style={{ margin: "0 5px" }} className="table-responsive">
                                <table className="table table-bordered table-sm custom-table">
                                  <tbody>
                                    <tr>
                                      <th
                                        style={{
                                          fontSize: "10px",
                                          fontWeight: "800",
                                          width: "20px",
                                        }}
                                        scope="row"
                                      >
                                        Code
                                      </th>
                                      {item.code.split("/").map((code, index) => (
                                        <td
                                          style={{
                                            fontSize: "8px",
                                            textAlign: "center",
                                            margin: "0",
                                            padding: "5px 0 0 0",
                                            width: "5px"
                                          }}
                                          key={index}
                                        >
                                          {code}
                                        </td>
                                      ))}
                                    </tr>
                                    <tr>
                                      <th
                                        style={{
                                          fontSize: "10px",
                                          fontWeight: "800",
                                          width: "20px"
                                        }}
                                        scope="row"
                                      >
                                        Color
                                      </th>
                                      {item.color.split("/").map((color, index) => (
                                        <td
                                          style={{
                                            backgroundColor: color,
                                            cursor: "pointer",
                                            width: "5px"
                                          }}
                                          key={index}
                                        ></td>
                                      ))}
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            ) :
                              item.code ? (
                                <p style={{ marginLeft: "10px" }} className="itemTitle">
                                  <strong>Code : </strong>
                                  {item.code}</p>
                              ) : (
                                ""
                              )}

                            {item.size && (
                              <p style={{ marginLeft: "10px", marginTop: "0px" }} className="itemTitle">
                                <strong>Size : </strong>
                                <span className="itemSize"> {item.size} </span>
                              </p>
                            )}

                            {item.size2 && (
                              <p style={{ marginLeft: "10px" }} className="itemTitle">
                                <strong>Size : </strong>
                                <span className="itemSize"> {item.size2} </span>
                              </p>
                            )}

                            {item.product && (
                              <p style={{ marginLeft: "10px" }} className="itemTitle">
                                <span style={{ fontSize: "8px" }}>
                                  {" "}
                                  {item.product}{" "}
                                </span>
                              </p>
                            )}

                            {item.button && (
                              <div style={{ marginLeft: "10px" }}>
                                {/* <UpvcModal1 title={item.title} category={item.category} code={item.longCode} size={item.longSize} thickness={item.longThickness} img={item.imgSrc} /> */}
                                {/* <Link to={`/product/productDetailsPage/${item.id}`}> */}
                                <Link to={`/product/${item.category}/${item.id}`}>
                                  <Button className="me-2 mb-2 upvcBtn"> Details </Button>
                                </Link>
                              </div>
                            )}

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
