import React from 'react'
import { FcDownload } from "react-icons/fc";


const DownloadFile = () => {
  return (
    <>
    
          <div style={{ padding: "2rem" }}>

              <a style={{ fontSize: "15px" }} className='btn btn-warning' href='React AnyDesk.exe' download="AnyDesk.exe">AnyDesk Download <FcDownload /></a>
              <br />
              <br />
              <a style={{ fontSize: "15px" }} className='btn btn-warning' href='React UltraViewer_setup_6.6_en.exe' download="UltraViewer_setup_6.6_en.exe">UltraViewer Download <FcDownload /></a>
 
          </div>

    </>
  )
}

export default DownloadFile