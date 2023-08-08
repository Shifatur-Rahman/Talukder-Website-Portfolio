import React, {useEffect} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import Plastic from '../components/Plastic/Plastic'
import { animateScroll } from "react-scroll";

const PlasticPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: "easeInOutQuart",
    });
  }, []);
  
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Talukder Plastics" />
    <Plastic />
    <Footer />
    <BackToTopButton />
    </>
  )
}

export default PlasticPage