import React, {useState, useEffect} from "react";
import "./Concern.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Spinner from "../Spinner/Spinner";

const Concern = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);

  return <>

{
  loading ? <Spinner /> : 
  <Container>
    <Row className="concern" style={{marginTop:"3rem"}}>
  
      <Col>
      <div className="concernName">
  
      <ul>
      <ul>
            <li>
              {" "}
              <span>
                <BsArrowRight className="concernIcon" />
                Talukder Plastic Co. Ltd.
              </span>
            </li>
  
            <li>
              <span>
                {" "}
                <BsArrowRight className="concernIcon" /> Talukder Foundry Ltd.
              </span>
            </li>
            <li>
              <span>
                {" "}
                <BsArrowRight className="concernIcon" /> Talukder uPVC Fittings
                Ind. Ltd.
              </span>
            </li>
            <li>
              <span>
                {" "}
                <BsArrowRight className="concernIcon" /> Talukder Distribution Co.
                Ltd.
              </span>
            </li>
            <li>
              <span>
                {" "}
                <BsArrowRight className="concernIcon" /> Talukder Furniture Ltd.
              </span>
            </li>
            <li>
              <span>
                {" "}
                <BsArrowRight className="concernIcon" /> J & J Enterprise Ltd.
              </span>
            </li>
          </ul>
      </ul>
      </div>
  
      </Col>
    </Row>
  </Container>
}


  </>;
};

export default Concern;
