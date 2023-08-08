import React, { useEffect } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import Slider from "../components/Slider/Slider";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
// import Slider2 from "../components/Slider2/Slider2";

const HomePage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <>
      <Header />
      <TopNavigation title="Talukder Group" />
      <Slider />
      {/* <Slider2 /> */}
      <Services />
      <NewsDetails />
      <Footer />
      <BackToTopButton /> 

    </>
  );
};

export default HomePage;
