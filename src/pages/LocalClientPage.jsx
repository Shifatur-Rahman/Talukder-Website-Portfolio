import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import LocalClient from '../components/LocalClient/LocalClient'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";



const LocalClientPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
 <TopNavigation title="Talukder Group" />
 <PageTop pageTitle="Local Client" />
 <LocalClient />
 <Footer />
 </>
  )
}

export default LocalClientPage