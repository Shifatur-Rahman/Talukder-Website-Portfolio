import React from 'react'
import "./Error.css"
import Error1 from "../../asset/images/Error img/error1.jpg"
import Error2 from "../../asset/images/Error img/error2.jpg"
import TopNavigation from '../TopNavigation/TopNavigation'

const Error = () => {
  return (
    <>
    
    <div className='error'>
        <img src={Error1} alt="Error 1 Page" />
    </div>
    
    </>
  )
}

export default Error