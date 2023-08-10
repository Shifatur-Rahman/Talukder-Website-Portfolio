import React, {useState, useEffect} from "react";
import "./JEnterprise.css";
import { Container, Col, Row } from "react-bootstrap";
import Spinner from "../Spinner/Spinner.jsx";

const JEnterprise = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return <>
  {
    loading ? (<Spinner />) : ( <Container style={{ marginTop: "5rem", marginBottom: "7rem" }}>
      <Row>
          <Col
            sm={12}
            md={12}
            lg={12}
            style={{ textAlign: "justify" }}
          >
            <p className='plasticText'>
              J & J Enterprise Ltd. is a prominent concern within the esteemed Talukder Group of Industries. This dynamic enterprise plays a pivotal role in various sectors, including manufacturing, trading, and services. With a commitment to excellence and a customer-centric approach, J & J Enterprise has established itself as a reputable entity in the corporate landscape. The company encompasses a diverse portfolio of products and services, catering to the evolving needs of different industries and market segments. J & J Enterprise is known for its dedication to quality, innovation, and customer satisfaction, which are integral to its success.
              The benefits of Talukder Foundry are given below:
              <br /> <br />
              <ul>
                <li>
                  <a>J & J Enterprise also offers various services tailored to the specific needs of its clients. These services may include consulting, project management, logistics support, or other value-added solutions. The company's team of experienced professionals brings expertise and industry knowledge to deliver comprehensive and customized services. </a>
                </li>
                <li>
                  <a> With a commitment to corporate responsibility and sustainable practices, J & J Enterprise strives to contribute positively to society and the environment. The concern adheres to ethical business practices and fosters long-term relationships with stakeholders based on trust, transparency, and mutual growth.</a>
                </li>

              </ul>
            </p>
          </Col>
      </Row>
     </Container>)
  }

  </>;
};

export default JEnterprise;
