import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutDescription.css";
import Spinner from "../Spinner/Spinner";

const AboutDescription = () => {
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
        <Container>
          <Row className="AboutMeMargin">
            <Col sm={12} md={12} lg={12}>
              <h1 className="AboutPageTitle">Who we are</h1>
              <p className="AboutPageDescription">
                Talukder Group of Industries had started its journey since July,
                1973. Founder chairman Mr. Nurul Islam Talukder established
                Talukder foundry Ltd (TFL) with a vision of large-scale
                Industrialization. Now Talukder Group is a successful brand name
                as well as a flagship corporate name in corporate world with
                great achievement with the dedicated service to all her
                stakeholders and partners. Under the leadership of Managing
                Director Mr. Samsul Arafin Talukder Group of Industries becomes
                the largest partner of LGED, JICA and PEDP in furnishing Primary
                Schools all over the Country.
              </p>
              <hr className="AboutMeHr" />

              <h1 className="AboutPageTitle">Our Mission</h1>
              <p className="AboutPageDescription">
                1. To ensure best suit product for our customer to meet their
                need without having any issue of disatisfaction.
                <br />
                2. To create job opportunity for our people and provide right
                platform to discover their potentiality.
                <br />
                3. To ensure highest level of satisfaction of our employees as
                we believe and consider human resource is the most important of
                all the resources an organization possesses.
                <br />
                4. To contribute consistently to national Gross Domestic Product
                (GDP) maintaining an exponential growth in productivity.
                <br />
                5. To ensure continuous development of products commensurate the
                ongoing technological development worldwide.
                <br />
                6. To be cost effective using advance technology and modern
                machinery not only to enhance profit margin, rather to provide
                quality product with economy price.
                <br />
                7. To create a sustainable business environment in achieving
                long term organizational goals.
                <br />
                8. To expand manufacturing facility and distribution network
                parallelly to cater to all regions in the country.
                <br />
                9. To be a socially responsible and sensible corporate house,
                addressing and adhering to need of community and environment.
              </p>

              <hr className="AboutMeHr" />

              <h1 className="AboutPageTitle">Our Vision</h1>
              
              <p className="AboutPageDescription">
                Plastic industry is a fast-growing sector of Bangladesh in terms
                of employment and production. The main objective of Talukder
                group is to serve the customers with best quality of products
                and provide employment facility. The objective of Group is to
                grow equally in accordance with market demand and always be
                viable technically, financially and in environmental aspects.
              </p>
            </Col>
          </Row>
        </Container>
        )
      }
      </>
    );
  }

export default AboutDescription;
