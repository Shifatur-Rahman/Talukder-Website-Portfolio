import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactSection.css";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const ContactSection = () => {
  let [name, setName] = useState("");
  let submitHandle = (e) => {
    e.preventDefault();
    // console.log(name);
  };
  let changeHandle = (e) => {
    setName(e.target.value);
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);


  return (
    <>
    {
  loading ? <Spinner /> : 
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h1 className="footerTitle">Quick connect</h1>
            <Form onSubmit={submitHandle}>
              <Form.Group className="mb-3">
                <Form.Label className="contactFormHeader">Name</Form.Label>
                <Form.Control
                  className="formControl"
                  type="text"
                  name="username"
                  value={name.username}
                  onChange={changeHandle}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="contactFormHeader">Email </Form.Label>
                <Form.Control
                  className="formControl"
                  type="email"
                  name="email"
                  value={name.email}
                  onChange={changeHandle}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="contactFormHeader">Message</Form.Label>
                <Form.Control
                  className="formControl"
                  as="textarea"
                  rows="5"
                  name="text"
                  value={name.text}
                  onChange={changeHandle}
                />
              </Form.Group>

              <Button
                variant="primary"
                className="contactFormBtn"
                type="submit"
              >
                Submit
              </Button>
              
            </Form>
          </Col>

          <Col sm={12} md={6} lg={6} className="rightContact">
            <h1 className="footerTitle">Discuss Now</h1>

            <AiFillHome className="socialFontPhone" />
            <a className="socialLink"> House #39, Lake Drive Road, Nikunja-1</a>
            <br />

            <MdEmail className="socialFontPhone" />
            <a className="socialLink">info@talukder-group.com.bd</a>
            <br />

            <BsFillTelephoneFill className="socialFontPhone" />
            <a className="socialLink"> +88-01966-333355</a>
          </Col>
        </Row>
      </Container>
}
    </>
  );
};

export default ContactSection;
