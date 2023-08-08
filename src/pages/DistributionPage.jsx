import React, {useEffect} from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Distribution from '../components/Distribution/Distribution'
import { animateScroll } from "react-scroll";

const DistributionPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Talukder Distribution" />
    <Distribution />
    <Footer />

    </>
  )
}

export default DistributionPage