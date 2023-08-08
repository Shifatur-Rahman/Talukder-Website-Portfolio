import React, { Component } from "react";
// import AllProject from "../components/AllProject/AllProject";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
// import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio/Portfolio";
import { animateScroll } from "react-scroll";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

class PortfolioPage extends Component {
  componentDidMount() {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }
  
  render() {
    return (
        <>
        <TopNavigation title="Talukder Group of Industries" />
        <PageTop pageTitle="Our Products" />
        <Portfolio />
        <Footer />
        <BackToTopButton />
        </>
    );
  }
}

export default PortfolioPage;
