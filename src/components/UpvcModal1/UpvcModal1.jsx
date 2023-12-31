import React from 'react'
import { useState } from 'react';
import {Button, Table, Modal} from 'react-bootstrap';
import "./UpvcModal1.css"

const UpvcModal1 = (props) => {

    const { title, category, code, size, thickness, img, id } = props;
    // const values = [true];
    // const [lgShow, setLgShow] = useState(true);
    // const [show, setShow] = useState(false);
    // const [pCode, setPCode] = useState("");
    // const [pSize, setPSize] = useState("");
    // const [pThickness, setPThickness] = useState("");
  
    
    // function handleShow(breakpoint) {
    //     setLgShow(breakpoint);
    //     setShow(true);
    //     setPCode(code);
    //     setPSize(size);
    //     setPThickness(thickness);
    // }

  return (
    <>

      {/* {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2 upvcBtn" size="sm" onClick={() => handleShow(v)}>
          Details
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))} */}

      {/* <Modal className='upvcModal' size="lg" show={show} lgShow={lgShow} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <h4 className='upvcModalTitle'>{title}</h4>
        </Modal.Header>

        <Modal.Body>
          <div className="upvcTable">
            <Table responsive="sm" className="table-info">
              <thead>
                <tr className="upvcTableTr">
                  <th>Code</th>
                  <th>Nominal Diameter X Length</th>
                  {thickness && <th>Thickness(mm)</th>}
                </tr>
              </thead>

              <tbody className="upvcTableBody">
                <tr>
                  <td>
                    {pCode.split("/").map((code, index) => (
                      <p key={index}>{code}</p>
                    ))}
                  </td>

                  <td>
                    {pSize.split("/").map((size, index) => (
                      <p key={index}>{size}</p>
                    ))}
                  </td>

                  {thickness && (
                    <td>
                      {pThickness.split("/").map((thickness, index) => (
                        <p key={index}>{thickness}</p>
                      ))}
                    </td>
                  )}
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>

      </Modal> */}



      <div className='upvcModal'>
        <div>
          <div className="upvcTable">
            <Table striped bordered hover responsive="sm" className="table-info">
              <thead>
                <tr style={{padding:"10px"}} className="upvcTableTr">
                  <th style={{textAlign: "center"}}>Code</th>
                  <th style={{textAlign: "center"}}>Nominal Diameter X Length</th>
                  {thickness && <th style={{textAlign: "center"}}>Thickness(mm)</th>}
                </tr>
              </thead>

              <tbody className="upvcTableBody">
                <tr>

                  <td>
                    {code.split("/").map((code, index) => (
                      <p style={{textAlign: "center"}} key={index}>{code}</p>
                    ))}
                  </td>

                  <td>
                    {size.split("/").map((size, index) => (
                      <p style={{textAlign: "center"}} key={index}>{size}</p>
                    ))}
                  </td>

                  {thickness && (
                    <td>
                      {thickness.split("/").map((thickness, index) => (
                        <p style={{textAlign: "center"}} key={index}>{thickness}</p>
                      ))}
                    </td>
                  )}

                </tr>
              </tbody>
            </Table>
          </div>
        </div>

      </div>

        {/* <Modal.Header>
          <img src={img} />
        </Modal.Header> */}

    </>
  )
}

export default UpvcModal1;