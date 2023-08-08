import React, { Component } from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import { animateScroll } from "react-scroll";
// import { motion } from "framer-motion";

class AboutPage extends Component {
  componentDidMount() {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }

  render() {
    return (
      <>
        <TopNavigation title="Talukder Group" />
        <PageTop pageTitle="About Us" />
        <AboutDescription />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}

export default AboutPage;
