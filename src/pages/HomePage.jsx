import React, { useEffect } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import Slider from "../components/Slider/Slider";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NewsDetails from "../components/NewsDetails/NewsDetails";
// import Services from "../components/Services/Services";

const HomePage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <>
      <TopNavigation title="Talukder Group" />
      <Slider />
      {/* <Services /> */}
      <NewsDetails />
      <Footer />
      <BackToTopButton /> 
    </>
  );
};

export default HomePage;
