import React, {useRef, useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createNewSupplier, updateExistingSupplier } from './SupplierAction';

const SupplierModal = ({ show, handleClose, currentSupplier }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        ContactFname: '',
        ContactLname: '',
        CompanyName: '',
        Address: '',
        ContactTitle: '',
        Email: '',
        Phone: ''
    });

    const formRef = useRef(null);

    useEffect(() => {
        if (currentSupplier) {
            setFormData(currentSupplier);
        } else {
            setFormData({
                ContactFname: '',
                ContactLname: '',
                CompanyName: '',
                Address: '',
                ContactTitle: '',
                Email: '',
                Phone: ''
            });
        }
    }, [currentSupplier]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        const updatedFormData = {
            ContactFname: form.ContactFname.value,
            ContactLname: form.ContactLname.value,
            CompanyName: form.CompanyName.value,
            Address: form.Address.value,
            ContactTitle: form.ContactTitle.value,
            Email: form.Email.value,
            Phone: form.Phone.value
        };

        try {
            if (currentSupplier) {
                await dispatch(updateExistingSupplier(currentSupplier.SupplierID, updatedFormData));
            } else {
                await dispatch(createNewSupplier(updatedFormData));
            }
            handleClose();
        } catch (error) {
            console.error("Error submitting supplier data:", error);
            // Optionally set an error state to display a message to the user
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentSupplier ? 'Edit Supplier' : 'Add New Supplier'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group controlId="ContactFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.ContactFname}
                            placeholder="Enter First Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="ContactLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.ContactLname}
                            placeholder="Enter Last Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="CompanyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.CompanyName}
                            placeholder="Enter Company Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.Address}
                            placeholder="Enter Address"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="ContactTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.ContactTitle}
                            placeholder="Enter Title"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            defaultValue={formData.Email}
                            placeholder="Enter Email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="Phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.Phone}
                            placeholder="Enter Phone"
                            required
                        />
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