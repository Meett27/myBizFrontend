import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { createNewSupplier, updateExistingSupplier } from './SupplierAction';

const SupplierModal = ({ show, handleClose, currentSupplier }) => {
    console.log(currentSupplier, "currentSupplier");
    const dispatch = useDispatch();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const companyNameRef = useRef();
    const addressRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    useEffect(() => {
        if (currentSupplier) {
            firstnameRef.current.value = currentSupplier.ContactFname;
            lastnameRef.current.value = currentSupplier.ContactLname;
            companyNameRef.current.value = currentSupplier.CompanyName;
            addressRef.current.value = currentSupplier.Address;
            titleRef.current.value = currentSupplier.Title;
            emailRef.current.value = currentSupplier.Email;
            phoneRef.current.value = currentSupplier.Phone;
        }
    }, [currentSupplier]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstname = firstnameRef.current.value;
        const lastname = lastnameRef.current.value;
        const companyName = companyNameRef.current.value;
        const address = addressRef.current.value;
        const title = titleRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        if (currentSupplier) {
            await dispatch(updateExistingSupplier(currentSupplier.SupplierID, { ContactFname: firstname, ContactLname: lastname, CompanyName: companyName, Address: address, Title: title, Email: email, Phone: phone }));
            handleClose();
        } else {
            await dispatch(createNewSupplier({ ContactFname: firstname, ContactLname: lastname, CompanyName: companyName, Address: address, Title: title, Email: email, Phone: phone }));
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentSupplier ? 'Edit Supplier' : 'Add New Supplier'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={firstnameRef} required />
                    </Form.Group>
                
                    <Form.Group controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={lastnameRef} required />
                    </Form.Group>

                    <Form.Group controlId="companyname">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" ref={companyNameRef} required />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" ref={addressRef} required />
                    </Form.Group>
                    
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref={titleRef} required />
                    </Form.Group>
            

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control as="number" ref={phoneRef} required  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {currentSupplier ? 'Save Changes' : 'Add Supplier'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SupplierModal;