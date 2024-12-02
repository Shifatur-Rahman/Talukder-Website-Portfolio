// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';

// const DisplayOrder = ( { formData } ) => {

//      console.log(formData);


//   if (!formData) {
//     return <p>No data available. Please fill out the form first.</p>;
//   }

//   return (
//     <>
    
//     <div>
//       <h2>Order List</h2>


    

//       <Table responsive="lg">
//         <thead>
//           <tr>
//             <th>sl</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>

//         {orderData.map((data, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{data.firstName}</td>
//             <td>{data.email}</td>
//             <td>{data.phoneNumber}</td>
//             <td>{data.address}</td>
//           </tr>
//         ))}
    
//       </tbody>
//       </Table>

//     </div> 
    
//     </>
//   )
// }

// export default DisplayOrder   