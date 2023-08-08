import { Col, Container, Row } from "react-bootstrap";
import "./VideoSection.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import BigPlayButton from "react-player";

const VideoSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col className="videoCard">
            <h2 className="videoTitle">How We do</h2>
            <p className="videoPara">
              A vision statement describes where the company aspires to be upon
              achieving its mission. This statement reveals the where of
              business but not just where the company seeks to be. Rather, a
              vision statement describes where the company wants a community, or
              the world, to be as a result of the company’s services. Our
              mission is to our clients opinions while they come in a situation
              to where we build recommend others for IT sector in Bangladesh.
            </p>

            <p>
              <AiFillPlayCircle onClick={handleShow} className="playBtn" />
            </p>
          </Col>
        </Row>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />

              <BigPlayButton position="center" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modalInfo" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default VideoSection;
