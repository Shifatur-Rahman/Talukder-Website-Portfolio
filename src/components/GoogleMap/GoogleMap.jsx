import React ,{useEffect} from "react";
import "./GoogleMap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GoogleMap = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      duration: 2000, // values from 0 to 3000, with step 50ms
     
    });
  }, []);

  return (
    // data-aos='fade-right'
<div>
      <iframe
        id="gmap"
        src="https://www.google.com/maps/embed/v1/place?q=talukder+group+nikunja&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
