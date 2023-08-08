import React from 'react'
import "./Spinner.css"
import { useState, useEffect } from "react";
// import { ThreeDots } from "react-loader-spinner";
// import TalukderSpinnerImg1 from "../../asset/images/Reload/loading.svg" 
import TalukderSpinnerImg from "../../asset/images/Reload/talukder.gif" 

const Spinner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }, []);

  return (
    <>
    <div className="spinner">
        <img src={TalukderSpinnerImg} alt="spinner" />
    </div>
    </>
  )
}

export default Spinner