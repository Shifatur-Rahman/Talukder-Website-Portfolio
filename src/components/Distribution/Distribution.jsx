import React, {useState, useEffect} from 'react'
import "./Distribution.css"
import { Container, Row, Col } from 'react-bootstrap'
import Spinner from "../Spinner/Spinner.jsx";

const Distribution = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return (
    <>
    {
loading ? (<Spinner />) : (
  <Container style={{ marginTop: "5rem", marginBottom: "7rem" }}>
    <Row>
              <Col
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "justify" }}
              >
                <p className='plasticText'>
                  Talukder Distribution Co. Ltd. is a significant concern within the Talukder Group of Industries. As part of the group, Talukder Distribution plays a vital role in the distribution and supply chain management of various products and goods.
                  With a strong network and infrastructure, Talukder Distribution ensures the efficient and timely delivery of products to customers across different regions. They have developed expertise in managing logistics, inventory management, and transportation to ensure seamless distribution operations.
                  The benefits of plastic furniture are given below:
                  <br /> <br />


                  <ul>
                <li>
                  <a>Talukder Distribution caters to a wide range of industries, including consumer goods, industrial products, construction materials, and more. They work closely with manufacturers, suppliers, and retailers to ensure the smooth flow of goods from production to end-consumers. </a>
                </li>
                <li>
                  <a> With the support of the Talukder Group's extensive resources and experience, Talukder Distribution has grown into a trusted name in the distribution sector. They continue to expand their operations and adapt to evolving market demands to meet the needs of their customers effectively.</a>
                </li>
                
              </ul>
                 
                </p>
              </Col>
    </Row>
  </Container>
)
    }
  
    </>
  )
}

export default Distribution