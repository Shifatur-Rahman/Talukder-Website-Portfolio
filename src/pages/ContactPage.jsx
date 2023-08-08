import React, { Component } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { animateScroll } from "react-scroll";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
// import { motion } from "framer-motion";

class ContactPage extends Component {
  componentDidMount() {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }
  
  render() {
    return (
      // <motion.div
      //   initial={{ width: 0 }}
      //   animate={{ width: "100%" }}
      //   exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
      // >
        <>
        <TopNavigation title="Talukder Group" />
        <PageTop pageTitle="Contact Us" />
        <ContactSection />
        <Footer />
        <BackToTopButton />
        </>
      // </motion.div>
    );
  }
}

export default ContactPage;
