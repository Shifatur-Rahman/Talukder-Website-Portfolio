import React, {useState, useEffect} from "react";
import "./ManagementTeam.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile1Img from "../../asset/images/About us/profile.png";
import profile2Img from "../../asset/images/About us/avatar.jpg";
import profile3Img from "../../asset/images/About us/avatarFemale.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";

const ManagementTeam = () => {
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
<section style={{marginBottom:"2rem", marginTop:"3rem"}}>
      <div className="profile-area">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="card">
                <div className="img11">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img12">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2> ALHAJ MD NURUL ISLAM TALUKDER</h2>
                  <p style={{ fontSize: "14px" }}  className="main-text-p">CHAIRMAN</p>
                  <Link to={`/about/chairman-message`}>
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px", marginBottom:"25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="card">
                <div className="img11">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img12">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>MR MD SAMSUL ARIFIN</h2>
                  <p style={{ fontSize: "14px" }}  className="main-text-p">MANAGING DIRECTOR</p>
                  <Link to={`/about/md-message`}>
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px", marginBottom:"25px" }}>
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

      <div>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>MR MD SAMSUL ABEDIN</h2>
                  <p style={{ fontSize: "12px" }}  className="main-text-p">Director</p>
                  <Link
                    to={`/about/Message/Details?title=${"MR MD SAMSUL ABEDIN"}&subTitle=${"Director"}`}
                  >
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px", marginBottom:"25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

                <Col lg={3} md={6} sm={12}>
                  <div className="card">
                    <div className="img1">
                      <img src={profile1Img} alt="one img" />
                    </div>

                    <div className="img2">
                      <img src={profile2Img} alt="two img" />
                    </div>

                    <div className="main-text">
                      <h2>MR MD SAMSUL SALEHIN</h2>
                      <p style={{ fontSize: "12px" }} className="main-text-p">Director</p>
                      <Link
                        to={`/about/Message/Details?title=${"MR MD SAMSUL SALEHIN"}&subTitle=${"Director"}`}
                      >
                        <Button className="profileBtn" variant="outline-info">
                          Details
                        </Button>
                      </Link>
                    </div>

                    <div className="socials" style={{ fontSize: "25px", marginBottom: "25px" }}>
                      <BsFacebook style={{ marginRight: "5px" }} />
                      <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                      <GrPinterest style={{ marginRight: "5px" }} />
                      <AiFillGooglePlusCircle />
                    </div>
                  </div>
                </Col>

                <Col lg={3} md={6} sm={12}>
                  <div className="card">
                    <div className="img1">
                      <img src={profile1Img} alt="one img" />
                    </div>

                    <div className="img2">
                      <img src={profile3Img} alt="two img" />
                    </div>

                    <div className="main-text">
                      <h2>Mrs. Shaila Akter</h2>
                      <p style={{ fontSize: "12px" }} className="main-text-p">
                        Chief Executive Officer (CEO)
                      </p>
                      <Link
                        to={`/about/Message/Details?title=${"Mrs. Shaila Akter"}&subTitle=${" Chief Executive Officer (CEO)"}`}
                      >
                        <Button className="profileBtn" variant="outline-info">
                          Details
                        </Button>
                      </Link>
                    </div>

                    <div className="socials" style={{ fontSize: "25px", marginBottom: "25px" }}>
                      <BsFacebook style={{ marginRight: "5px" }} />
                      <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                      <GrPinterest style={{ marginRight: "5px" }} />
                      <AiFillGooglePlusCircle />
                    </div>
                  </div>
                </Col>

                {/* <Col lg={3} md={6} sm={12}>
                  <div className="card">
                    <div className="img1">
                      <img src={profile1Img} alt="one img" />
                    </div>

                    <div className="img2">
                      <img src={profile3Img} alt="two img" />
                    </div>

                    <div className="main-text">
                      <h2>Mrs. Ferdausi Akter</h2>
                      <p style={{ fontSize: "12px" }} className="main-text-p"> Deputy Managing Director</p>
                      <Link
                        to={`/about/Message/Details?title=${"Mrs.Ferdausi Akter"}&subTitle=${"Deputy Managing Director"}`}>
                        <Button className="profileBtn" variant="outline-info">
                          Details
                        </Button>
                      </Link>
                    </div>

                    <div className="socials" style={{ fontSize: "25px", marginBottom: "25px" }}>
                      <BsFacebook style={{ marginRight: "5px" }} />
                      <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                      <GrPinterest style={{ marginRight: "5px" }} />
                      <AiFillGooglePlusCircle />
                    </div>
                  </div>
                </Col> */}
                
          </Row>
        </Container>
      </div>
      </section>
}
    </>
  );
};

export default ManagementTeam;
