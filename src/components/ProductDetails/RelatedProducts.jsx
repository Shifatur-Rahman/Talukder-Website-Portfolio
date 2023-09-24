import React from 'react'
import productList from "../Portfolio/PortfolioImgApi.jsx";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from "react-bootstrap";

const RelatedProducts = (props) => {
    const { title, category, code, size, thickness, img, id } = props;
    return (
        <>
            <div>  
                <h1>Related Products</h1>
                <h1>{category}</h1>
                <h2>{id}</h2>

                {
                    productList.map((singleP) => {
                        
                            <p>{singleP.title}</p>
                    })
                }

            </div>
        </>
    )
}

export default RelatedProducts
