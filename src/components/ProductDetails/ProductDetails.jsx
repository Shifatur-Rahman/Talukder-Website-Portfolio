import React, { useState, useEffect } from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
// import totalProduct from "../Portfolio/PortfolioImgApi.jsx";
import totalProduct from "../Portfolio/ProductApi.jsx";
import tgLogo from "../../asset/images/Logo/talukderLogo.png"
import ReactImageMagnify from 'react-image-magnify';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from 'react-bootstrap';
import UpvcModal1 from '../UpvcModal1/UpvcModal1';
import RelatedProducts from './RelatedProducts';
import StoreLocation from './StoreLocation';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Spinner from "../Spinner/Spinner.jsx";

 //   modal for order address
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import DisplayOrder from './DisplayOrder.jsx';
import Swal from 'sweetalert2'
import axios from 'axios';

const ProductDetails = ({ productQuantity, setProductQuantity, setCartProductQuantity, }) => {

  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();

  const [quantityCount, setQuantityCount] = useState(1);

  //   modal for order address
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  //const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    setTimeout(() => { 
      setLoading(false);
    }, 3200);
  }, []);

  const handleAddToCart = () => {
    setCartProductQuantity((prevState) => prevState + productQuantity);
    setProductQuantity(0);
  };

  let { id } = useParams();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //    form

  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    firstName: '',
    address: '',
    quantity: '',
    productName: '',
    productPrice: ''
  });

  const [submittedData, setSubmittedData] = useState([]); 
  const [error, setError] = useState("");
    
  const handleForm = (e) => {

    // const { name, value } = e.target;
    // if (name === "phoneNumber" && (value.length > 11 || !/^\d*$/.test(value))) {
    //   setError("Phone number must be numeric and no longer than 11 digits.");
    // } else {
    //   setError("");
    // }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phoneNumber.length !== 11) {
      setError("Phone must be 11 digits");
      return;
    }
    setError("");

     setSubmittedData([...submittedData, formData]);
    //  navigate('/management/order', { state: { formData } });

    setFormData({
      firstName: "",
      email: "",
      phoneNumber: "",
      address: "",
      quantity: "",
      productName: "",
      productPrice: ""
    });

    const data = {
      Name: formData.firstName,
      Email: formData.email,
      Phone: formData.phoneNumber,    
      Address: formData.address,    
      Quantity: quantityCount,
      Product: productName,
      Price: productPrice * quantityCount
    }
                    
    axios.post('https://api.sheetbest.com/sheets/d7828f31-2de4-4f8e-b69f-e26a657e5171',data).then((res)=>{

      console.log(res);
     // console.log(res.email);
      setFormData({
        firstName: "",
        email: "",
        phoneNumber: '', 
        address: "",
        quantityCount: '',
        productName: "",
        productPrice: ""
      });

    })

    
    setLgShow(false);
    Swal.fire({
      title: " Order Add Successfully ",
      icon: "success",
    }); 

  };

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/management/order', { state: { formData } });
  // };

  return (
    <>

      {/* {loading ? (
        <div style={{ marginTop: "7rem" }}>
          <Spinner />
        </div>

      ) : ( */}

        <div style={{ backgroundColor: "#e6e6e6" }}>         
          {
            totalProduct.map((singleItem) => {
           //   setProductName(singleItem.title) 
              if (singleItem.id == id) {
                return (
                  <main style={{ marginTop: "4rem" }} className="product" onFocus={() => {
                    setProductName(singleItem.title);
                    setProductPrice(singleItem.price);
                  }}>
                    <div className="container-md grid product-container">
                      <div
                        style={{ marginTop: "3rem" }}
                        className="flex product-image"
                      >
                        <div id="imageMagnifier">
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "TGI Image",
                                isFluidWidth: true,
                                src: `${singleItem.imgSrc}`,
                                // src: `${singleItem.imgSrc[currentProductImage]}`,
                                className: "large",
                                width: 380,
                                height: 480,
                              },
                              largeImage: {
                                src: `${singleItem.imgSrc}`,
                                // src: `${singleItem.imgSrc[currentProductImage]}`,
                                width: 800,
                                height: 800,
                                className: "small",
                              },
                              enlargedImageContainerDimensions: {
                                width: "100%",
                                height: "100%",
                                backgroundColor: "white",
                              },
                              // enlargedImagePosition: 'over',
                              lensStyle: { backgroundColor: "rgba(0,0,0,.4)" },
                            }}
                          />
                        </div>

                        <div className="thumbnail-wrapper flex">
                          <div className="thumbnail">
                            <img
                              onClick={() => setCurrentProductImage(0)}
                              className={
                                currentProductImage === 0 ? "active" : ""
                              }
                              src={`${singleItem.imgSrc}`}
                              alt="thumbnail"
                            />
                          </div>

                          <div className="thumbnail">
                            <img
                              onClick={() => setCurrentProductImage(1)}
                              className={
                                currentProductImage === 1 ? "active" : ""
                              }
                              src={`${singleItem.imgSrc}`}
                              alt="thumbnail"
                            />
                          </div>

                          <div className="thumbnail">
                            <img
                              onClick={() => setCurrentProductImage(2)}
                              className={
                                currentProductImage === 2 ? "active" : ""
                              }
                              src={`${singleItem.imgSrc}`}
                              alt="thumbnail"
                            />
                          </div>

                          <div className="thumbnail">
                            <img
                              onClick={() => setCurrentProductImage(3)}
                              className={
                                currentProductImage === 3 ? "active" : ""
                              }
                              // src={`${singleItem.imgSrc[3]}`}
                              src={`${singleItem.imgSrc}`}
                              alt="thumbnail"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="product-description flow">
                        <p className="text-uppercase Orange">
                          {/* Talukder Group of Industries */}
                          <img src={tgLogo} className="tgLogo" alt="altLogo" />
                        </p>
                        <h1
                          style={{ textTransform: "uppercase" }}
                          className="productDetailsTitle"
                        >
                          {singleItem.title}                       
                        </h1>
                        <p
                          style={{ textAlign: "justify", fontSize: "14px" }}
                          className="darkGrayishBlue"
                        >
                          The product details page for Talukder Group can
                          provide comprehensive information about their
                          products, including specifications, features, and any
                          other relevant details. Here's a sample description of
                          what the product details page might include:
                        </p> 
      
                        <div className="product-price">   
                          <div className="discounted-price flex">  
                            <span className="productPrice">   
                              BDT{" "}
                              {singleItem.price
                                ? singleItem.price 
                                : "0.0"}{" "}
                            </span>
                            <span className="offer fw-700 fs-400 Orange">     
                              0%
                            </span>
                          </div>
                          {/* <div className="original-price">
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontSize: "16px",
                              }}

                              className="fw-700 fs-400 line-height-500 GrayishBlue"
                            >
                              BDT {singleItem.price ? singleItem.price : "0.0"}
                            </span>
                          </div> */}
                        </div>

                        <div className="cart-plus-minus">
                          <button
                            style={{
                              border: "none",
                              width: "30px",
                              fontSize: "24px",
                              background: "#cccccc",
                            }}
                            onClick={() =>
                              setQuantityCount(
                                quantityCount > 1 ? quantityCount - 1 : 1
                              )
                            }
                            className="dec qtybutton"
                          >
                            -
                          </button>
                          <input
                            className="cart-plus-minus-box"
                            style={{
                              border: "none",
                              width: "30px",
                              fontSize: "24px",
                              background: "#cccccc",
                            }}
                            type="text"
                            value={quantityCount}
                            readOnly
                          />
                          <button
                            style={{
                              border: "none",
                              width: "30px",
                              fontSize: "24px",
                              background: "#cccccc",
                            }}
                            onClick={() =>
                              setQuantityCount(
                                quantityCount
                                  ? //< productStock - productCartQty
                                    quantityCount + 1
                                  : quantityCount
                              )
                            }
                            className="inc qtybutton"
                          >
                            +
                          </button>
                        </div>

                        <div className="action-wrapper flex">
                          <button
                            // onClick={handleAddToCart}
                            // onClick={handleShow}

                            onClick={() => {
                              if (singleItem.category === "PLASTIC TOY") {
                                setLgShow(true); // Open modal if the category is PLASTIC TOY
                              } else {
                                //alert("This product is not available."); // Show an alert for unavailable products
                                Swal.fire({
                                  icon: 'error',
                                  title: 'Oops...',
                                  text: 'This product is not available!',
                                });
                              }
                            }}

                            //onClick={() => setLgShow(true)}
                            className="btnCart flex2"
                          >
                            <svg
                              width="22"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#ffffff"
                                fillRule="nonzero"
                              />
                            </svg>
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Modal */}

                    <Modal
                      size="xl"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            textAlign: "center",
                            color: "#3399ff",
                          }}
                        >
                          {" "}
                          Checkout &gt; Your Order
                        </p>
                      </Modal.Header>
                      <Modal.Body>
                        <Container>
                          <Row>
                            <Col lg={7}>
                              <div className="form-container">
                                <form onSubmit={handleSubmit}>
                                  <div className="address-form">
                                    <label>
                                      Name:{" "}
                                      <span style={{ color: "red" }}>*</span>
                                      <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleForm}
                                        required
                                      />
                                    </label>

                                    <div
                                      style={{ display: "flex", gap: "5px" }}
                                    >
                                      <label>
                                        Email:{" "}
                                        <span style={{ color: "red" }}>*</span>
                                        <input
                                          type="email"
                                          name="email"
                                          value={formData.email}
                                          onChange={handleForm}
                                        />
                                      </label>

                                      <label>
                                        Phone:{" "}
                                        <span style={{ color: "red" }}>* </span>
                                        <span style={{color:"red", fontSize:"9px"}}>{error}</span>                                        
                                        <input 
                                          type="text"
                                          name="phoneNumber"
                                          value={formData.phoneNumber}
                                          onChange={handleForm}
                                          required
                                        />
                                      </label>                                       
                                    </div>
                                   

                                    <label>
                                      Address:{" "}
                                      <span style={{ color: "red" }}>*</span>
                                      <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleForm}
                                        required
                                      ></textarea>
                                    </label>

                                    <button type="submit">Save</button>
                                  </div>
                                </form>                               
                              </div> 
                            </Col>  
      
                            <Col lg={5}> 
                              <h5> Your Order </h5>
                              <p style={{ fontSize: "13px" }}>
                                Your purchase will be delivered in 1 shipment(s)
                              </p>
                              <div className="orderProductDetails">
                                <div className="productHeader">
                                  <div className="left">
                                    <p
                                      style={{
                                        marginBottom: "2px",
                                        color: "#1a8cff",
                                        fontSize: "16px",
                                      }}
                                    >
                                      Product
                                    </p>
                                  </div>
                                  <div className="right">
                                    <p
                                      style={{
                                        marginBottom: "2px",
                                        color: "#1a8cff",
                                        fontSize: "16px",
                                      }}
                                    >
                                      Total
                                    </p>
                                  </div>                                  
                                </div>

                                <hr style={{ margin:"0", padding:"0"  }} /> 

                                 {/* product add */}
                                <div className="productHeader">
                                <div className="left">
                                    <p
                                      style={{
                                        marginBottom: "2px",                                        
                                        fontSize: "16px",
                                      }}
                                    >
                                       {singleItem.title} x {quantityCount}
                                    </p>
                                  </div>
                                  <div className="right">
                                    <p
                                      style={{
                                        marginBottom: "2px",                                       
                                        fontSize: "16px",
                                      }}
                                    > 
                                      {singleItem.price * quantityCount} TK
                                    </p>
                                  </div>
                                </div>
     
                                <div className="productHeader">
                                <div className="left">
                                    <p
                                      style={{
                                        marginBottom: "2px",                                        
                                        fontSize: "16px",
                                      }}
                                    > 
                                       Shipping
                                    </p>
                                  </div>
                                  <div className="right">
                                    <p
                                      style={{
                                        marginBottom: "2px",                                       
                                        fontSize: "16px",
                                      }}
                                    > 
                                      - 
                                    </p>
                                  </div>
                                </div>

                                <hr style={{ margin:"0", padding:"0"  }} /> 

                                <div className="productHeader">
                                <div className="left">
                                    <p
                                      style={{
                                        marginBottom: "2px",                                        
                                        fontSize: "16px",
                                      }}
                                    >
                                       Total 
                                    </p>
                                  </div>
                                  <div className="right">
                                    <p
                                      style={{
                                        marginBottom: "2px",                                       
                                        fontSize: "16px",
                                      }}
                                    > 
                                      {singleItem.price * quantityCount} TK
                                    </p>
                                  </div>
                                </div>                               

                                {/* <span style={{ fontSize: "10px" }}>
                                {" "}
                                {singleItem.title} (
                                {singleItem.price - singleItem.price * 0.15}){" "}
                              </span>{" "}
                              <span style={{ fontSize: "10px" }}>x</span>
                              
                              <img
                                src={singleItem.imgSrc}
                                style={{
                                  border: "1px solid black",
                                  width: "150px",
                                  height: "120px",
                                }}
                              /> */}

                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Modal.Body>
                    </Modal>

                    {/* Product description */}
                    <Container>
                      <Box
                        className="tabBox"
                        style={{ padding: "0 1rem" }}
                        sx={{ width: "100%", typography: "body1" }}
                      >
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                              className="custom-tab"
                              onChange={handleChange}
                              aria-label="lab API tabs example"
                            >
                              <Tab label="Overview" value="1" />
                              <Tab label="Material Information" value="2" />
                              <Tab label="Reviews" value="3" />
                            </TabList>
                          </Box>

                          <TabPanel
                            className="tabPanelMargin"
                            style={{ marginTop: "4px" }}
                            value="1"
                          >
                            {singleItem.code && (
                              <span className="singleItemProductTitle">
                                Code :{" "}
                                <span className="singleItemProductValue">
                                  {" "}
                                  {singleItem.code}{" "}
                                </span>{" "}
                                <br />{" "}
                              </span>
                            )}
                            <span className="singleItemProductTitle">
                              Product Name :{" "}
                              <span className="singleItemProductValue">
                                {" "}
                                {singleItem.title}
                              </span>{" "}
                            </span>{" "}
                            <br />
                            <span className="singleItemProductTitle">
                              Product Type :{" "}
                              <span className="singleItemProductValue">
                                {singleItem.category}
                              </span>{" "}
                            </span>{" "}
                            <br />
                            {singleItem.Warranty && (
                              <div>
                                <span className="singleItemProductTitle">
                                  Warranty :{" "}
                                  <span className="singleItemProductValue">
                                    {" "}
                                    {singleItem.Warranty}
                                  </span>{" "}
                                </span>
                              </div>
                            )}
                            {singleItem.size && (
                              <span
                                style={{ marginBottom: "5px" }}
                                className="singleItemProductTitle"
                              >
                                Size :{" "}
                                <span className="singleItemProductValue">
                                  {" "}
                                  {singleItem.size}
                                </span>{" "}
                                <br />{" "}
                              </span>
                            )}
                            {singleItem.size2 && (
                              <span className="singleItemProductTitle">
                                Size :{" "}
                                <span className="singleItemProductValue">
                                  {" "}
                                  {singleItem.size2}
                                </span>{" "}
                              </span>
                            )}
                            {singleItem.color2 && (
                              <span className="singleItemProductTitle">
                                Color :{" "}
                                <span className="singleItemProductValue">
                                  {" "}
                                  {singleItem.color2}{" "}
                                </span>{" "}
                                <br />{" "}
                              </span>
                            )}
                            {singleItem.longCode && (
                              <UpvcModal1
                                title={singleItem.title}
                                category={singleItem.category}
                                code={singleItem.longCode}
                                size={singleItem.longSize}
                                thickness={singleItem.longThickness}
                                img={singleItem.imgSrc}
                                longLength={singleItem.longLength}
                                longColor={singleItem.longColor}
                              />
                            )}
                          </TabPanel>

                          <TabPanel
                            className="tabPanelMargin"
                            style={{ marginTop: "4px" }}
                            value="2"
                          >
                            {singleItem.material && (
                              <ul className="productDetailsList">
                                <li className="singleItemProductValue">
                                  {" "}
                                  Made from {singleItem.material}.
                                </li>
                              </ul>
                            )}

                            <div>
                              <ul className="productDetailsList">
                                <li className="singleItemProductValue">
                                  Imported high quality hardware fittings
                                </li>
                                {/* <li className='singleItemProductValue'>Indoor use only</li> */}
                                <li className="singleItemProductValue">
                                  {" "}
                                  Easy and damage free transportation.{" "}
                                </li>
                                <li className="singleItemProductValue">
                                  Any assembly or installation required will be
                                  done by the TFL team at the time of delivery
                                </li>
                                <li className="singleItemProductValue">
                                  Free assembly service by expert technician
                                </li>
                              </ul>
                            </div>

                            {/* <br /> */}

                            {singleItem.color && singleItem.code && (
                              <div
                                style={{ margin: "0 5px" }}
                                className="table-responsive RelatedProductTable"
                              >
                                <table className="table table-bordered table-sm custom-table">
                                  <tbody>
                                    <tr>
                                      <th
                                        style={{
                                          fontSize: "10px",
                                          fontWeight: "800",
                                          width: "10px",
                                        }}
                                        scope="row"
                                      >
                                        Code
                                      </th>
                                      {singleItem.code
                                        .split("/")
                                        .map((code, index) => (
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
                                      {/* {singleItem.color.split("/").map((color, index) => (
                                        <td
                                          style={{
                                            backgroundColor: color,
                                            cursor: "pointer",
                                            width: "5px"
                                          }}
                                          key={index}
                                        ></td>
                                      ))} */}

                                      {singleItem.color
                                        .split("/")
                                        .map((color, index) => (
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
                                                // justifyContent: "center",
                                                // alignItems: "center",
                                              }}
                                            ></td>
                                          </td>
                                        ))}
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}

                            {/* {
                              singleItem.longCode &&
                              <UpvcModal1 title={singleItem.title} category={singleItem.category} code={singleItem.longCode} size={singleItem.longSize} thickness={singleItem.longThickness} img={singleItem.imgSrc} />
                            } */}
                          </TabPanel>

                          <TabPanel
                            className="tabPanelMargin"
                            style={{ marginTop: "4px" }}
                            value="3"
                          >
                            <p
                              style={{
                                fontSize: "15px",
                                color: "#4d4d4d",
                                fontWeight: "600",
                                marginLeft: "5px",
                              }}
                            > 
                              4.5 out of 5 (5 Review) 
                            </p>
                            <Stack spacing={1}>
                              <Rating
                                name="size-large"
                                defaultValue={5}
                                size="large"
                                readOnly
                              />
                              <Rating
                                name="size-medium"
                                defaultValue={4}
                                readOnly
                              />
                              <Rating
                                name="size-small"
                                defaultValue={0}
                                size="small"
                                readOnly
                              />
                            </Stack>
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </Container>

                    {/* Related Product slider */}
                    <RelatedProducts
                      id={singleItem.id}
                      category={singleItem.category}
                    />

                    {/* Store Location */}
                    <StoreLocation />
                  </main>
                );
              }
            })
          }
        </div>

       

    </>
  )
}

export default ProductDetails
