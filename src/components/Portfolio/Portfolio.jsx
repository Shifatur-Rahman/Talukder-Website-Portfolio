import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import portfolioItems from "./PortfolioImgApi";
import { Container } from "@mui/material";
import { Row, Col, Button } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import PageLoader from "../PageLoader/PageLoader";
import Spinner from "../Spinner/Spinner";
import UpvcModal1 from "../UpvcModal1/UpvcModal1";
import { Blurhash } from "react-blurhash";

const Portfolio = () => {

  const [category, setCategory] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown, setDropdown] = useState(false);  

  const isActive = (category) => {
    return category === activeCategory ? "active" : "";
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setActiveCategory(e.target.value);
    setDropdownOpen(false);
  };

  const [selectedImage, setSelectedImage] = React.useState("");

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
    }, 2600);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownPlastic = () => {
    setDropdown(!isDropdown);
  };
  
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container style={{ marginTop: "2rem", marginBottom: "6rem" }}>
          <Row>
            <Col
              // data-aos="fade-right"
              // data-aos-anchor="#example-anchor"
              // data-aos-offset="500"
              // data-aos-duration="1000"
              xs={12}
              md={12}
              lg={12}
            >
              {/* <div data-aos='fade-right' className="filter-buttons"> */}
              <div className="filter-buttons">
                <div className="dropdown">
                  <button
                    value="all"
                    onClick={handleCategory}
                    className={isActive("all")}
                  >
                    ALL
                  </button>
                </div>

                <div className="dropdown">
                  <button
                    value="upvc"
                    onClick={handleCategory}
                    className={isActive("upvc")}
                  >
                    UPVC
                  </button>
                </div>

                <div className="dropdown">
                  <button
                    className={isActive("plastic")}
                    onClick={toggleDropdownPlastic}
                  >
                    PLASTIC
                    <span className="dropdown-arrow">
                      {isDropdown ? "▲" : "▼"}
                    </span>
                  </button>
                  {isDropdown && (
                    <div className="dropdown-content">
                      <button
                        value="PLASTIC FURNITURE"
                        onClick={handleCategory}
                        className={isActive("PLASTIC FURNITURE")}
                        style={{ fontSize: "10px", marginTop: "10px" }}
                      >
                        PLASTIC FURNITURE
                      </button>
                      <button
                        value="PLASTIC HOUSEHOLD"
                        onClick={handleCategory}
                        className={isActive("PLASTIC HOUSEHOLD")}
                        style={{ fontSize: "10px" }}
                      >
                        PLASTIC HOUSEHOLD
                      </button>

                      <button
                        value="PLASTIC TOY"
                        onClick={handleCategory}
                        className={isActive("TOY")}
                        style={{ fontSize: "10px" }}
                      >
                        TOY
                      </button>
                    </div>
                  )}
                </div>

                <div className="dropdown">
                  <button
                    value="lged"
                    onClick={handleCategory}
                    className={isActive("lged")}
                  >
                    SCHOOL FURNITURE
                  </button>
                </div>

                <div className="dropdown" style={{ flexDirection: "column" }}>
                  <button
                    className={isActive("WOODfURNITURE")}
                    onClick={toggleDropdown}
                  >
                    WOOD AND METAL FURNITURE
                    <span className="dropdown-arrow">
                      {isDropdownOpen ? "▲" : "▼"}
                    </span>
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      <button
                        value="HOME FURNITURE"
                        onClick={handleCategory}
                        className={isActive("HOME FURNITURE")}
                        style={{ fontSize: "10px", marginTop: "10px" }}
                      >
                        HOME FURNITURE
                      </button>
                      <button
                        value="office furniture"
                        onClick={handleCategory}
                        className={isActive("office furniture")}
                        style={{ fontSize: "10px" }}
                      >
                        OFFICE FURNITURE
                      </button>

                      <button
                        value="INDUSTRIAL FURNITURE"
                        onClick={handleCategory}
                        className={isActive("INDUSTRIAL FURNITURE")}
                        style={{ fontSize: "10px" }}
                      >
                        INDUSTRIAL FURNITURE
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Col>

            {loading ? (
              <PageLoader />
            ) : (
                  <div
                    className="portfolio-grid">
                    {portfolioItems
                      .filter((item) => {
                        if (category === "all") {
                          return true;
                        }
                        else {
                          return item.category === category;
                        }
                      })

                      .map((item) => (
                        <div
                          className="portfolio-item"
                          key={item.id}>

                          <img
                            className="portfolio-item-img"
                            src={`${item.imgSrc}`}
                            alt={item.title}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleImageClick(item.imgSrc)}
                          />

                          <div style={{ marginTop: "15px", width: "100%" }}>

                            {item.title && (
                              <p className="itemTitle">
                                <strong>Name : </strong>
                                <span style={{ textTransform: "uppercase" }}>
                                  {" "}
                                  {item.title}{" "}
                                </span>
                              </p>
                            )}

                            {item.button && (
                              <div>
                                <UpvcModal1 title={item.title} category={item.category} code={item.longCode} size={item.longSize} thickness={item.longThickness} />
                              </div>
                            )
                            }

                            {item.color && item.code ? (
                              <div className="table-responsive">
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
                                            padding: "5px 0 0 0"
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
                                <p className="itemTitle">
                                  <strong>Code : </strong>
                                  {item.code}</p>
                              ) : (
                                ""
                              )}

                            {item.size && (
                              <p className="itemTitle">
                                <strong>Size : </strong>
                                <span className="itemSize"> {item.size} </span>
                              </p>
                            )}

                            {item.size2 && (
                              <p className="itemTitle">
                                <strong>Size : </strong>
                                <span className="itemSize"> {item.size2} </span>
                              </p>
                            )}

                            {item.product && (
                              <p className="itemTitle">
                                <span style={{ fontSize: "8px" }}>
                                  {" "}
                                  {item.product}{" "}
                                </span>
                              </p>
                            )}

                          </div>
                        </div>
                      ))}
                  </div>
            )}
            
                                    {/* Image in big Size       */}

              <Dialog open={Boolean(selectedImage)} onClose={handleDialogClose}>
                <DialogContent>
                  <IconButton
                    sx={{ position: "absolute", top: 0, right: 0 }}
                    onClick={handleDialogClose}
                  >
                    <CloseIcon />
                  </IconButton>
                  <img
                    className="zoomImage"
                    alt="product-img"
                    src={selectedImage}
                    srcSet={
                      selectedImage &&
                      `${selectedImage}?w=500&fit=crop&auto=format&dpr=2 2x`
                    }
                  />
                </DialogContent>
              </Dialog>

          </Row>
        </Container>
      )}
    </>     
  );
};

export default Portfolio;
