import React from 'react'
import {useState, useEffect} from 'react'
import "./Career.css"
import { Container, Row, Col } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import AOS from "aos";
import Spinner from '../Spinner/Spinner';

const Career = () => {

  useEffect(() => {
    AOS.init({
      offset: 120, 
      delay: 0,
      easing: "ease",
      duration: 1500, // values from 0 to 3000, with step 50ms
       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or
       once: false, // whether animation should happen only once - while scrolling down
       mirror: false, // whether elements should animate out while scrolling past them
       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should 
       animatedClassName: 'aos-animate', // class applied on animation
       initClassName: 'aos-init', // class applied after initialization
       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
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
      )
      :
    <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>

          <Row style={{ marginTop: "3rem" }}>
            <Col sm={12} md={6} lg={8}>
              <div className='opportunity'>
                <p data-aos="fade-right"
                  //  data-aos-anchor="#example-anchor"
                  //  data-aos-offset="500"
                  //  data-aos-duration="1000"
                  className='careerHeader'>Find Your <strong>Opportunity</strong></p>
                <p className='careerText'> Whatever your career goals may be, Talukder group provides the opportunity to work with advanced technologies, global customers, and the most innovative, talented minds in the industry. Your career path with us can encompass diverse, challenging assignments that span product lines, job types, and businesses.</p>

              </div>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <div>
                <p data-aos="fade-down"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500" className='experience'>Choose a job you love, and you will never have to work a day in your life. <br /> —Confucius
                </p>
              </div>
            </Col>
          </Row>



        <hr />
        <br />

          <Row>
            <Col>
              <p className='careerText'>At Talukder group of industries, we believe in providing our employees with a fulfilling and rewarding career path. We understand that each individual has unique career aspirations, and we strive to provide opportunities that align with those aspirations. With a focus on advanced technologies and global customers, our employees are exposed to some of the most innovative and challenging projects in the industry. </p>
              {/* <br /> */}
              <p className='careerText'>We believe in nurturing and developing talent, and provide our employees with diverse and challenging assignments that span different product lines, job types, and businesses. We encourage our employees to take ownership of their career path and provide them with the resources and support to achieve their career goals. </p>

            </Col>
          </Row>

    </Container>

}
    </>
  )
}

export default Career