import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import ReactPlayer from "react-player";
import "./Advertisement.css";
import Dining_Table from "../../asset/videos/Dining_Table_Advertise.mp4";
import AllBucket from "../../asset/videos/All_Bucket_Advertise.mp4";
import Fittings_Advertise from "../../asset/videos/Fittings_Advertise.mp4";
import Food_Container from "../../asset/videos/Food_Container.mp4";
import Household_Product1 from "../../asset/videos/Household_Product1.mp4";
import Household_Product2 from "../../asset/videos/Household_Product2.mp4";
import Jug_Advertise from "../../asset/videos/Jug_Advertise.mp4";
import King_Chair_Advertise from "../../asset/videos/King_Chair_Advertise.mp4";
import Lundry_Basket_Advertise from "../../asset/videos/Lundry_Basket_Advertise.mp4";
import Rack_Advertise from "../../asset/videos/Rack_Advertise.mp4";
import Pipe_Advertise_2 from "../../asset/videos/Pipe_Advertise_2.mp4";
import Thread_Pipe from "../../asset/videos/Thread_Pipe.mp4";
import Food_ContainerImg from "../../asset/images/advertisement/Rectangular Container.jpg";
import LaundryItemImg from "../../asset/images/advertisement/Laundry Busket.jpg";
import fittingsImg from "../../asset/images/advertisement/fittings.jpg";
import jugImg from "../../asset/images/advertisement/jug.jpg";
import household1 from "../../asset/images/advertisement/household1.jpg";
import household2 from "../../asset/images/advertisement/household2.jpg";
import square_rack from "../../asset/images/advertisement/Squre Rack.jpg";
import chairImg from "../../asset/images/advertisement/President Chair.jpg";
import pipe1Img from "../../asset/images/advertisement/pipe1.jpg";
import threadPipeImg from "../../asset/images/advertisement/threadPipe.jpg";
import bucketImg from "../../asset/images/advertisement/bucketposter.jpg";
import tableImg from "../../asset/images/advertisement/04.jpg";
import AOS from "aos";
import Spinner from "../Spinner/Spinner";

const Advertisement = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 2000,
      disable: false,
      once: false,
      mirror: false,
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
      useClassNames: false,
    });
  }, []);

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
      ) : (
        <Container style={{ marginTop: "5rem", marginBottom: "8rem" }}>
          <Row
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            style={{ marginTop: "5rem" }}
          >
            {/* data-aos='fade-up' */}
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={bucketImg}
                >
                  <source src={AllBucket} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Bucket</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={tableImg}
                >
                  <source src={Dining_Table} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Dinning Table</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={fittingsImg}
                >
                  <source src={Fittings_Advertise} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Fittings Advertise</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={Food_ContainerImg}
                >
                  <source src={Food_Container} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Food Container</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={household1}
                >
                  <source src={Household_Product1} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Household Product one</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={household2}
                >
                  <source src={Household_Product2} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Household Product two</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={jugImg}
                >
                  <source src={Jug_Advertise} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Jug Advertise</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={chairImg}
                >
                  <source src={King_Chair_Advertise} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">King Chair</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={LaundryItemImg}
                >
                  <source src={Lundry_Basket_Advertise} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Laundry Basket</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={square_rack}
                >
                  <source src={Rack_Advertise} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Rack Advertise</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={pipe1Img}
                >
                  <source src={Pipe_Advertise_2} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle"> Pipe Advertise </h2>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                  poster={threadPipeImg}
                >
                  <source src={Thread_Pipe} type="video/mp4" />
                </video>
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle"> Thread Pipe</h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Advertisement;
