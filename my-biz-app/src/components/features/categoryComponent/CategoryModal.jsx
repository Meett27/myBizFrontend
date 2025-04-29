import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { createNewCategory, updateExistingCategory } from './CategoryAction';

const CategoryModal = ({ show, handleClose, currentCategory }) => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        if (currentCategory) {
            nameRef.current.value = currentCategory.name;
            descriptionRef.current.value = currentCategory.description;
        }
    }, [currentCategory]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;

        if (currentCategory) {
            await dispatch(updateExistingCategory(currentCategory.id, { name: name, description: description }));
            handleClose();
        } else {
            await dispatch(createNewCategory({ name: name, description: description }));
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentCategory ? 'Edit Category' : 'Add New Category'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" ref={descriptionRef} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {currentCategory ? 'Save Changes' : 'Add Category'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CategoryModal;   