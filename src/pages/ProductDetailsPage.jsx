import React, {useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { animateScroll } from "react-scroll";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import PageTop from '../components/PageTop/PageTop';

const ProductDetailsPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    
    <TopNavigation />
    <ProductDetails />
    <Footer />
    
    
    </>
  )
}

export default ProductDetailsPage