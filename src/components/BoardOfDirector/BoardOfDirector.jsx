import React, { useState, useEffect } from "react";
import "./BoardOfDirector.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import "./BoardOfDirector.css";
import profile1Img from "../../asset/images/About us/profile.png";
import profile2Img from "../../asset/images/About us/avatar.jpg";
import profile3Img from "../../asset/images/About us/avatarFemale.png";
import Spinner from "../Spinner/Spinner";

const BoardOfDirector = () => {
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
        <div className="profile-area">
          <Container style={{ marginTop: "4rem", marginBottom: "0" }}>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Mr. Md Samsul Arifin</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Managing Director
                    </p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px", marginTop:"20px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile3Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Mrs. Ferdausi Akter</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Deputy Managing Director
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px", marginTop:"20px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Al Amin Masud Alam</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      General Manager <br />
                      Technical
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Muhammad Ali Akram</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      General Manager <br />
                      Operation
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>MD. Majharul Islam</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                    Group Asst. General Manager <br />
                    (VAT, TAX & Audit)

                    </p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Md. Al-Mamunur Rashid</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                    Assistant General Manager <br />
                    Head of Production (Fabrication)
                    </p>                   
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>MD. Amir Hamza</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Asst. General Manager <br />
                      Head of Production (Furniture)
                    </p>                    
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Md. Asadullah</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                    Sr. Manager <br />
                    Head of Finance & Legal
                    </p>
             
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Md. Mostafizur Rahman </h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                    Sr. Manager <br />
                    Head of Admin (Factory)
                    </p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Md. Monjurul Rowshon</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Sr. Manager <br />
                      Corporate Sales
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Md. Shafiqur Rahman</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Sr. Manager <br /> Corporate Sales
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2 style={{fontSize:"12px"}}>Abu Tahmid Mahmud E-Elahi</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                     Sr. Manager <br /> Head of Tender Sales
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
            <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Abdullah Al Momin</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                    Manager <br /> Head of SCM
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Hasnatul Karim Talukder </h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Manager <br />
                   IT Department
                    </p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2>Prince Md. Saiyadina Islam</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                    Manager <br />  HR & Admin
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <div className="managementCard">
                  <div className="img1">
                    <img src={profile1Img} alt="one img" />
                  </div>

                  <div className="img2">
                    <img src={profile2Img} alt="two img" />
                  </div>

                  <div className="main-text">
                    <h2 style={{fontSize:"12px"}}>S. K. Abdullah Al-Masud</h2>
                    <p style={{ fontSize: "12px" }} className="main-text-p">
                      Manager(Design) <br /> Product Development
                    </p>
                    <p></p>
                  </div>

                  <div className="socials" style={{ fontSize: "25px" }}>
                    <BsFacebook style={{ marginRight: "5px" }} />
                    <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                    <GrPinterest style={{ marginRight: "5px" }} />
                    <AiFillGooglePlusCircle />
                  </div>
                </div>

              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default BoardOfDirector;
