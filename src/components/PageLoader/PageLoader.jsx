import React, { useState, useEffect } from "react";
// import {InfinitySpin } from "react-loader-spinner";
import "./PageLoader.css";
import pageLoaderImg from "../../asset/images/Reload/talukder.gif"

const PageLoader = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3400);
  // }, []);

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    }, 3200); // Refresh every 5 seconds

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, []);

  return (
    <>

{/* {
  loading ?  */}

      {/* : ""
} */}

      {/* <div className="page-loader">
  <img src={pageLoaderImg} alt ="pre-loader" /> 
      </div> */}

<div key={refreshKey} className="component-wrapper">
      {/* Content of your component */}
      <div className="page-loader">
        <img src={pageLoaderImg} alt="pre-loader" />
      </div>
    </div>

    </>

  );
};

export default PageLoader;




