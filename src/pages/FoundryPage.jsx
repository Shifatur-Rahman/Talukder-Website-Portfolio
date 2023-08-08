import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Foundry from '../components/Foundry/Foundry'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const FoundryPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Talukder Foundry" />
    <Foundry />
    <Footer />
    </>
  )
}

export default FoundryPage