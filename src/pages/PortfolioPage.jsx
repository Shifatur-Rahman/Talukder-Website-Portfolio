import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Portfolio from "../components/Portfolio/Portfolio";
import { animateScroll } from "react-scroll";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const PortfolioPage = () => {

  const location = useLocation();
  const category = location.pathname.split("/").pop();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);   
           
  return ( 
    <>
      <TopNavigation title="Talukder Group of Industries" />
      <PageTop pageTitle="Our Products" />
      <Portfolio />
      <Footer />
      <BackToTopButton /> 
    </>
  );
};
    
export default PortfolioPage; 
