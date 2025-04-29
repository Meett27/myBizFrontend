import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


import{ getSuppliers, deleteSupplier } from './SupplierAction';
import SupplierModal from './SupplierModal';  

const SupplierList = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.suppliers.suppliers);
  const [showModal, setShowModal] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState(null);

  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch]);

  const handleShow = (supplier = null) => {
    setCurrentSupplier(supplier);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentSupplier(null);
    dispatch(getSuppliers());
  };

  const handleDelete = (id) => {
    dispatch(deleteSupplier(id));
  };

  return (
    <div>
      <Button variant="primary" onClick={() => handleShow()}>Add New Supplier</Button>      
      <Table striped bordered hover>
        <thead>  
          <tr>            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company Name</th>  
            <th>Address</th>
            <th>Title</th>    
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.SupplierID}>
              <td>{supplier.ContactFname} </td>
              <td>{supplier.ContactLname}</td>
              <td>{supplier.CompanyName}</td>
              <td>{supplier.Address}</td>
              <td>{supplier.Title}</td>
              <td>{supplier.Email}</td>
              <td>{supplier.Phone}</td>
              <td>
                <Button variant="primary" onClick={() => handleShow(supplier)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(supplier.SupplierID)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <SupplierModal show={showModal} onHide={handleClose} supplier={currentSupplier} />
    </div>
  );
};

export default SupplierList;