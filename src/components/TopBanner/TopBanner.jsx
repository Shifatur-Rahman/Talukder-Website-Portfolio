// import React, {useEffect} from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "./TopBanner.css";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const TopBanner =() =>{

//   useEffect(() => {
//     AOS.init({
//       offset: 120, // offset (in px) from the original trigger point
//       delay: 0, // values from 0 to 3000, with step 50ms
//       easing: 'ease', // default easing for AOS animations
//       duration: 1000, // values from 0 to 3000, with step 50ms
//       // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//       // once: false, // whether animation should happen only once - while scrolling down
//       // mirror: false, // whether elements should animate out while scrolling past them
//       // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//       // animatedClassName: 'aos-animate', // class applied on animation
//       // initClassName: 'aos-init', // class applied after initialization
//       // useClassNames: false // if true, will add content of `data-aos` as classes on scroll
     
//     });
//   }, []);

//     return (
//       <>
//         <Container fluid={true} className="topFixedBanner p-0">
//           <div className="topBannerOverlay">
//             <Container className="text-center">
//               <Row>
//                 <Col className="topContent">
//                 {/* data-aos='fade-up' */}
//                   <h1 className="topBannerTitle">Talukder Group</h1>
//                   <h3 className="topBannerSubTitle">
//                     Better Design & Right Choice For Kitchen
//                   </h3>
//                   <Link to="/portfolio">
//                     <Button
//                       className="topBannerBtn"
//                       variant="outline-secondary"
//                       // data-aos="zoom-in"
//                     > 
//                       More Info
//                     </Button>
//                   </Link>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </Container>
//       </>
//     );
  
// }

// export default TopBanner;