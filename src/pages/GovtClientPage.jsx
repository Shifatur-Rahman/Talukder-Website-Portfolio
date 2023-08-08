import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import GovtClient from '../components/GovtClient/GovtClient'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const GovtClientPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Our Government Client"  />
    <GovtClient />
    <Footer /> 
    </>
  )
}

export default GovtClientPage