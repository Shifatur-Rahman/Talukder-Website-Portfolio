import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import "./BackToTopButton.css";
import backToTopButton from "../../asset/images/BackToTopButton/topButton.png";

const BackToTopButton = () => {
    const [backToTopBtn, setbackToTopBtn] = useState(false);

useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY>100){
            setbackToTopBtn(true);
        } else{
            setbackToTopBtn(false);
        }
    })
},[])

const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
  return (
    <div>
{
    backToTopBtn && (

        // <button
        // className='backToTopBtn'
        // onClick={scrollUp}>  
        // {/* <BsFillArrowUpCircleFill />   */}
        // </button>

        <div data-aos="fade-up" data-aos-duration="1000" className='backToTopBtn' onClick={scrollUp}>
             <img src={backToTopButton} /> 
        </div>

    )
}
    </div>
  )
}

export default BackToTopButton
