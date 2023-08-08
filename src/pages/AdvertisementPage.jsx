import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Advertisement from '../components/Advertisement/Advertisement';
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

const AdvertisementPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Commercial Ads" />
    <Advertisement />
    <Footer />
    <BackToTopButton />
    </>
  )
}

export default AdvertisementPage