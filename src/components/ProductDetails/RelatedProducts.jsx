import React from 'react'
import productList from "../Portfolio/PortfolioImgApi"
import { Link } from 'react-router-dom';
import { Row, Col, Button } from "react-bootstrap";

const RelatedProducts = (props) => {
  return (
    <>
    
    <h1>Related Products</h1>
    <h1>{props.category}</h1>

<div>
    {
       productList.filter((item)=>{
        if(item.category == props.category){
            <div>
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
        } else{
            <h1>Nothing got any product</h1>
        }
       })
    }
    </div>
    
    </>
  )
}

export default RelatedProducts