import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import ChairmanMessage from '../components/ChairmanMessage/ChairmanMessage'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'

const ChairmanMsgPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
     
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Message from Chairman" />
    <ChairmanMessage />
    <Footer />
    <BackToTopButton />
    
    </>
  )
}

export default ChairmanMsgPage