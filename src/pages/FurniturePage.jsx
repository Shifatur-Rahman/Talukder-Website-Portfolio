import React, {useEffect} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Furniture from '../components/Furniture/Furniture'
import { animateScroll } from "react-scroll";

const FurniturePage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: "easeInOutQuart",
    });
  }, []);
  
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Talukder Furniture" />
    <Furniture />
    <Footer />
    </>
  )
}

export default FurniturePage