import React, { useState, useEffect } from "react";
import "./Portfolio.css";
// import portfolioItems from "./PortfolioImgApi";
import portfolioItems from "./ProductApi";
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
// import { Blurhash } from "react-blurhash";
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from 'react-icons/bs';
import {motion, AnimatePresence} from 'framer-motion'
import ProductDetails from "../ProductDetails/ProductDetails";
import { Link, NavLink } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import { VaccinesRounded } from "@mui/icons-material";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { Nav, Navbar } from "react-bootstrap";

const Portfolio = () => {
 
  const [category, setCategory] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown, setDropdown] = useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [code, setCode] = useState("");

  const isActive = (category) => {
    return category === activeCategory ? "active" : "";
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setActiveCategory(e.target.value);
    setDropdownOpen(false);
    setPages(1);
  };

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleDialogClose = () => {
    setSelectedImage(null);
  };

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

  let handlePage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(portfolioItems.length / 30)) {
      setPages(selectedPage);
    }
  }
 
  let handleChange = (e) =>{
    setCode(e.target.value)
  } 

  return (
    <>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <div style={{ background: "#f2f2f2" }}> 
        <div style={{margin:"0 3rem"}}>
          <Row>
            <Col
              style={{ marginBottom: "10px", background: "#f2f2f2f" }}
              xs={12}
              md={12}
              lg={12}
            >
              <div className="filter-buttons">
                <motion.div layout className="dropdown">
                  <button
                    value="all"
                    onClick={handleCategory}
                    className={isActive("all")}
                  >
                    ALL
                  </button>

                  {/* <Button 
                          value="PLASTIC TOY"
                          onClick={handleCategory}
                          className={isActive("PLASTIC TOY")}
                          style={{ fontSize: "10px" }}
                        >
                          TOY
                        </Button> */}
                </motion.div>

                {/* UPVC */}

                <Navbar>
                  <Nav.Link>
                    <div className="dropdown">
                      <button
                        className={isActive("upvc")}
                        onClick={toggleDropdownPlastic}
                      >
                        UPVC
                        <span className="dropdown-arrow">
                          {isDropdown ? "▲" : "▼"}
                        </span>
                      </button>
                      {isDropdown && (
                        <div className="dropdown-content">
                          {/* <Link
                              to="/upvc/tubewell"
                              value="TUBEWELL"
                            >    */}
                          <button
                            className={isActive("TUBEWELL")}
                            onClick={handleCategory}
                            style={{ fontSize: "10px", marginTop: "10px" }}
                            value="TUBEWELL"
                          >
                            TUBEWELL
                          </button>
                          {/* </Link> */}

                          <button
                            value="PRESSURE PIPE"
                            onClick={handleCategory}
                            className={isActive("PRESSURE PIPE")}
                            style={{ fontSize: "10px" }}
                          >
                            PRESSURE PIPE
                          </button>

                          <button
                            value="PLUMBING PIPE"
                            onClick={handleCategory}
                            className={isActive("PLUMBING PIPE")}
                            style={{ fontSize: "10px" }}
                          >
                            PLUMBING PIPE
                          </button>

                          <button
                            value="NON PRESSURE PIPE"
                            onClick={handleCategory}
                            className={isActive("PLASTIC HOUSEHOLD")}
                            style={{ fontSize: "10px" }}
                          >
                            NON PRESSURE PIPE
                          </button>

                          <button
                            value="SWR PIPE"
                            onClick={handleCategory}
                            className={isActive("SWR PIPE")}
                            style={{ fontSize: "10px" }}
                          >
                            SWR PIPE & FITTINGS
                          </button>
                        </div>
                      )}
                    </div>
                  </Nav.Link>
                </Navbar>

                {/* Plastic */}

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

                      {/* <Link to="/products/plastic-toy"> */}
                      <Button
                        value="PLASTIC TOY"
                        onClick={handleCategory}
                        className={isActive("PLASTIC TOY")}
                        style={{ fontSize: "10px" }}
                      >
                        TOY
                      </Button>
                      {/* </Link> */}
                    </div>
                  )}
                </div>

                <div className="dropdown">
                  <button
                    value="School Furniture"
                    onClick={handleCategory}
                    className={isActive("School Furniture")}
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
                        value="home furniture"
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

            {/* {loading ? (
              <PageLoader /> 
            ) : ( */} 
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                layout
                className="portfolio-grid" 
              >
                {portfolioItems
                  .filter((item) => {
                    if (category === "all") {
                      return true;
                    } else {
                      return item.category === category;
                    }
                  })
                  .slice(pages * 30 - 30, pages * 30)
                  .map((item) => (
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2 }}
                      layout
                      className="portfolio-item"
                      key={item.id}
                    >    
                      <img
                        className="portfolio-item-img"
                        src={`${item.imgSrc}`}
                        alt={item.title}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleImageClick(item.imgSrc[0])} 
                      /> 
   
                      <div 
                        style={{ 
                          marginTop: "10px",
                          width: "100%",
                          marginBottom: "35px",
                        }}
                      >
                        {item.title && (
                          <p
                            style={{ marginLeft: "10px" }}
                            className="itemTitle"
                          >
                            <strong>Name : </strong>
                            <span style={{ textTransform: "uppercase" }}>
                              {" "}
                              {item.title}{" "}
                            </span>
                          </p>
                        )}

                        {item.color && item.code ? (
                          <div
                            style={{ margin: "0 5px" }}
                            className="table-responsive"
                          >
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
                                        width: "5px",
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
                                      width: "20px",
                                    }}
                                    scope="row"
                                  >
                                    Color
                                  </th>

                                  {item.color.split("/").map((color, index) => (
                                    <td
                                      key={index}
                                      style={{
                                        textAlign: "-webkit-center",
                                      }}
                                    >
                                      <td
                                        style={{
                                          backgroundColor: color,
                                          cursor: "pointer",
                                          width: "15px",
                                          height: "14px",
                                          display: "flex",
                                        }}
                                      ></td>
                                    </td>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        ) : item.code ? (
                          <p
                            style={{ marginLeft: "10px" }}
                            className="itemTitle"
                          >
                            <strong>Code : </strong>
                            {item.code}
                          </p>
                        ) : (
                          ""
                        )}

                        {item.product && (
                          <p
                            style={{ marginLeft: "10px" }}
                            className="itemTitle"
                          >
                            <span style={{ fontSize: "8px" }}>
                              {" "}
                              {item.product}{" "}
                            </span>
                          </p>
                        )} 
  
                        {item.button && ( 
                          <div style={{ marginLeft: "10px" }}>
                            <Link to={`/product/${item.category}/${item.id}`}>
                              <Button
                                style={{ borderRadius: "3px" }}
                                className="upvcBtn"
                              >
                                {" "}
                                view product{" "}
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            {/* )} */}

            {/* Image in big Size       */}

            {/* <Dialog open={Boolean(selectedImage)} onClose={handleDialogClose}>
                <DialogContent>
                  <IconButton
                    sx={{ position: "absolute", top: 0, right: 0 }}
                    onClick={handleDialogClose}
                  >
                    <CloseIcon className="closeIcon" />
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
              </Dialog>       */}
          </Row>

          {/* Pagination */}

          <Row>
            <div style={{ marginBottom: "60px" }} className="pagination">
              <span
                onClick={() => {
                  handlePage(pages - 1);
                  window.scrollTo(0, 0);
                }}
                className={pages > 1 ? "" : "Pagination_disable"}
              >
                <BsFillCaretLeftSquareFill style={{ color: "#2980B9" }} />
              </span>
              {[
                ...Array(
                  Math.ceil(
                    category === "all"
                      ? portfolioItems.length / 30
                      : portfolioItems.filter(
                          (item) => item.category === category
                        ).length / 30
                  )
                ),
              ].map((_, i) => {
                return (
                  <span
                    className={pages === i + 1 ? "selectedPage" : ""}
                    onClick={() => {
                      handlePage(i + 1);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {" "}
                    {i + 1}
                  </span>
                );
              })}
              <span
                onClick={() => {
                  handlePage(pages + 1);
                  window.scrollTo(0, 0);
                }}
                className={
                  pages <
                  Math.ceil(
                    portfolioItems.filter((item) => item.category === category)
                      .length / 30
                  )
                    ? ""
                    : "Pagination_disable"
                }
              >
                <BsFillCaretRightSquareFill style={{ color: "#2980B9" }} />
              </span>
            </div>
          </Row>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Portfolio;







 {/* UPVC */}

//  <div className="dropdown">
//  <button
//    className={isActive("plastic")}
//    onClick={toggleDropdownPlastic}
//  >
//    UPVC
//    <span className="dropdown-arrow">
//      {isDropdown ? "▲" : "▼"}
//    </span>
//  </button>
//  {isDropdown && (
//    <div className="dropdown-content">
//      <button
//        value="TUBEWELL"
//        onClick={handleCategory}
//        className={isActive("TUBEWELL")}
//        style={{ fontSize: "10px", marginTop: "10px" }}
//      >
//        TUBEWELL
//      </button>

//      <button
//        value="PRESSURE PIPE"
//        onClick={handleCategory}
//        className={isActive("PRESSURE PIPE")}
//        style={{ fontSize: "10px" }}
//      >
//        PRESSURE PIPE
//      </button>
     
//      <button
//        value="PLUMBING PIPE"
//        onClick={handleCategory}
//        className={isActive("PLUMBING PIPE")}
//        style={{ fontSize: "10px" }}
//      >
//        PLUMBING PIPE
//      </button>
     
//      <button
//        value="NON PRESSURE PIPE"
//        onClick={handleCategory}
//        className={isActive("PLASTIC HOUSEHOLD")}
//        style={{ fontSize: "10px" }}
//      >
//        NON PRESSURE PIPE
//      </button>

//      <button
//        value="SWR PIPE"
//        onClick={handleCategory}
//        className={isActive("SWR PIPE")}
//        style={{ fontSize: "10px" }}
//      >
//        SWR PIPE & FITTINGS
//      </button>                    
//    </div>
//  )}
// </div>
