import React, {useState, useEffect} from 'react'
import "./ProductDetails.css"
import {Button, Table, Modal} from 'react-bootstrap';

const ProductDetails = (props) => {
  const { title, category, code, size, thickness, img } = props;

  const values = [true];
    const [lgShow, setLgShow] = useState(true);
    const [show, setShow] = useState(false);
    const [pCode, setPCode] = useState("");
    const [pSize, setPSize] = useState("");
    const [pThickness, setPThickness] = useState("");

    function handleShow(breakpoint) {
      setLgShow(breakpoint);
      setShow(true);
      setPCode(code);
      setPSize(size);
      setPThickness(thickness);
  }
    

  return (
    <>



      <div className='productDetails'>

        
        
      </div>

    
    
    
    </>
  )
}

export default ProductDetails