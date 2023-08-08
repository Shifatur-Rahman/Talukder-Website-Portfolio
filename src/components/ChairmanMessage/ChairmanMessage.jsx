import React, {useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ChairmanMessage.css";
import avatarImg from "../../asset/images/About us/avatar.jpg";
import Spinner from "../Spinner/Spinner";

const ChairmanMessage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);
  return (
    <>

{loading ? (
        <Spinner />
      ) :
      <Container>
        <Row className="msgMargin">
          <Col sm={12} md={6} lg={6}>
            <div className="chairmanImg">
              <img src={avatarImg} alt="chairmanImg" />
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className="chairmanMsg">
              <blockquote className="chairmanText">
                "As the Chairman of Talukder Group of Industries, I am delighted
                to welcome you to our website. Our mission at Talukder Group of
                Industries is to become a leading industrial conglomerate that
                delivers high-quality products and services to our customers
                while maintaining our commitment to social responsibility and
                sustainable growth. We believe that our success is based on the
                collective efforts of our employees, customers, and
                stakeholders. To achieve this mission, we have a clear vision of
                where we want to go. We aim to expand our operations in various
                industries while maintaining our focus on innovation, customer
                satisfaction, and ethical business practices. We are committed
                to investing in the latest technology and resources to ensure
                that we remain competitive in a rapidly changing global market.
                At Talukder Group of Industries, we believe that success should
                not come at the cost of environmental degradation or social
                injustice. We are committed to creating a positive impact on
                society and the environment by promoting sustainable business
                practices, protecting natural resources, and contributing to
                social welfare initiatives. In conclusion, our mission and
                vision are the driving force behind our success. We will
                continue to strive towards our goals while maintaining our
                commitment to ethical business practices and sustainable
                growth." <br />
                <br />
                <cite className="ChairmanTitle">
                  - ALHAJ MD NURUL ISLAM TALUKDER <br /> Chairman
                </cite>
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
}
    </>
  );
};

export default ChairmanMessage;
