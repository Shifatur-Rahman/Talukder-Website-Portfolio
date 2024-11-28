import React from 'react'
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const DisplayOrder = () => {

  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <p>No data available. Please fill out the form first.</p>;
  }

  return (
    <>
    
    <div>
      <h2>Order List</h2>


      <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Name:</strong> {formData.firstName}</p>
      <p><strong>Address:</strong> {formData.address}</p>


      <Table responsive="lg">
        <thead>
          <tr>
            <th>sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>




    </div>
    
    </>
  )
}

export default DisplayOrder   