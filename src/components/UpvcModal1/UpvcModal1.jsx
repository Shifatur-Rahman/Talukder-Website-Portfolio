import React from 'react'
import { useState } from 'react';
import {Button, Table, Modal} from 'react-bootstrap';
import "./UpvcModal1.css"

const UpvcModal1 = (props) => {

     const { title, category, code, size, thickness, img, id, longLength, longColor } = props; 
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
      ))}

      <Modal className='upvcModal' size="lg" show={show} lgShow={lgShow} onHide={() => setShow(false)}>
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

        {/* Orginal one */}

      {/* <div className='upvcModal'>
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

      </div> */}
                             {/* 3rd one  */}

      {/* <div style={{ margin: "0 5px" }} className="table-responsive">
        <table className="table table-bordered table-sm custom-table">
          <tbody>
            <tr>
              <th
                style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  width: "20px",
                }}
                scope="row"
              >
                Code
              </th>
              {code.split("/").map((code, index) => (
                <td
                  style={{
                    fontSize: "8px",
                    textAlign: "center",
                    margin: "0",
                    padding: "5px 0 0 0",
                    width: "5px"
                  }}
                  key={index}
                >
                  {code}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div> */}

      <div style={{ marginTop: "10px", width: "600px", textAlign: "center" }} className="table-responsive">
        <table className="table table-bordered table-sm custom-table">
          <thead>
            <tr>
              <th
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  // width: "100%",
                  backgroundColor: "#494949",
                  color: "#fff"
                }}
                scope="row"
              >
                Code
              </th>

              <th
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  // width: "20px",
                  backgroundColor: "#3E3D91",
                  color: "#fff"
                }}
                scope="row"
              >
                Size
              </th>

              <th
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  // width: "20px",
                  backgroundColor: "#8491C9",
                  color: "#fff"
                }}
                scope="row"
              >
                Thickness
              </th>

              <th
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  // width: "20px",
                  backgroundColor: "#8491C9",
                  color: "#fff"
                }}
                scope="row"
              >
                Length
              </th>

              <th
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  // width: "20px",
                  backgroundColor: "#8491C9",
                  color: "#fff"
                }}
                scope="row"
              >
                Color
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th style={{textAlign: "-webkit-center"}}>
                {code.split("/").map((code, index) => (
                  <tr key={index} className = {index%2 !== 0 ? "tableCode" : ""}>
                    <td
                      style={{
                        fontSize: "11px",
                        textAlign: "center",
                        margin: "0",
                        padding: "5px 0 0 0",   
                                       
                      }}
                    >
                      {code}
                    </td>
                  </tr>
                ))}
              </th>

              <th style={{textAlign: "-webkit-center"}}>
                {size.split("/").map((size, index) => (
                  <tr key={index} className = {index%2 !== 0 ? "tablePrimary" : ""}>
                    <td                            
                      style={{
                        fontSize: "11px",                                            
                        padding: "5px 0 0 0",
                      //  width: "150px",                    
                      }}
                    >
                      {size}
                    </td>
                  </tr>
                ))}
              </th>

              <th style={{textAlign: "-webkit-center"}}>
                {thickness.split("/").map((thickness, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        fontSize: "11px",                        
                        margin: "0",
                        padding: "5px 0 0 0",  
                       // width: "100%",
                        //backgroundColor: "green"                                       
                      }}
                    >
                      {thickness}
                    </td>
                  </tr>
                ))}
              </th>

              <th style={{textAlign: "-webkit-center"}}>
                {longLength.split("/").map((longLength, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        fontSize: "11px",                        
                        margin: "0",
                        padding: "5px 0 0 0",
                        // width: "150px",                        
                      }}
                    >
                      {longLength}
                    </td>
                  </tr>
                ))}
              </th>

              <th style={{textAlign: "-webkit-center"}}>
                {longColor.split("/").map((longColor, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        fontSize: "11px",                        
                        margin: "0",
                        padding: "5px 0 0 0",
                        // width: "150px",                        
                      }}
                    >
                      {longColor}
                    </td>
                  </tr>
                ))}
              </th>

            </tr>
          </tbody>

        </table>
      </div>

    </>
  )
}

export default UpvcModal1;