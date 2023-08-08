import React from 'react'
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import Upvc1 from "../components/Upvc1/Upvc1";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import PageTop from '../components/PageTop/PageTop';

const Upvc1Page = () => {
    useEffect(() => {
        animateScroll.scrollToTop({
          duration: 500,
          smooth: "easeInOutQuart",
        });
      }, []);
  return (
    <>

      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder uPVC" />
      <Upvc1 />
      <Footer />
      <BackToTopButton />
    
    </>
  )
}

export default Upvc1Page