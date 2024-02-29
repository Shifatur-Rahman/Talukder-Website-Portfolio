import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Summary.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { forwardRef } from "react";

function Summary(props, ref) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      easing: "ease",
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Container fluid={true} className="SummarySection summaryMargin p-0">
        <div ref={ref} className="summaryOverlay">
          <Container className="text-center">
            {/* data-aos='fade-down' */}
            <Row data-aos="fade-down">
              <Col lg={9} md={8} sm={12}>
                <Row className="countSection">
                  <Col>
                    <h2 className="summaryTitle">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div className="chartsCountUp" style={{ height: 40 }}>
                            {isVisible ? <CountUp end={1973} /> : null}
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                    <h2 className="summaryTitle">Since</h2>
                    <hr className="summaryAlign" />
                  </Col>
                  <Col>
                    <h2 className="summaryTitle">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div className="chartsCountUp" style={{ height: 40 }}>
                            {isVisible ? <CountUp end={2000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                    <h2 className="summaryTitle">Employees</h2>
                    <hr className="summaryAlign" />
                  </Col>
                  <Col>
                    <h2 className="summaryTitle">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div className="chartsCountUp" style={{ height: 40 }}>
                            {isVisible ? <CountUp end={40} /> : null} +
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                    <h2 className="summaryTitle">Awards</h2>
                    <hr className="summaryAlign" />
                  </Col>
                </Row>
              </Col>

              <Col lg={3} md={4} sm={12}>
                <Card className="summaryCard">
                  <Card.Body>
                    <h2 className="summaryCardTitle">OUR PROJECTS</h2>
                    <Card.Text>
                      <p className="summaryCardText">
                        {" "}
                        <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                        LGED
                      </p>

                      <p className="summaryCardText">
                        {" "}
                        <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                        PEDP4
                      </p>

                      <p className="summaryCardText">
                        {" "}
                        <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                        JICA
                      </p>

                      <p className="summaryCardText">
                        {" "}
                        <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                        ADB
                      </p>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

//export default Summary;

export default forwardRef(Summary);
