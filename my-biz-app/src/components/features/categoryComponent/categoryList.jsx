import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import{ getCategories, deleteCategoryById } from './CategoryAction';
import CategoryModal from './CategoryModal';

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const [showModal, setShowModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const handleShow = (category = null) => {
        setCurrentCategory(category);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentCategory(null);
        dispatch(getCategories());
    };

    const handleDelete = (id) => {
        dispatch(deleteCategoryById(id));
    };

    return (
        <div>
            <Button variant="primary" onClick={() => handleShow()}>Add New Category</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Category Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleShow(category)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(category.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <CategoryModal show={showModal} handleClose={handleClose} currentCategory={currentCategory} />
        </div>
    );
};

export default CategoryList;


