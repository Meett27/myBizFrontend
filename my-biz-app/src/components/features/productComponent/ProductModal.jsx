import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createNewProduct, updateExistingProduct } from './ProductAction';

const ProductModal = ({ show, handleClose, currentProduct }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        ProductName: '',
        ProductDescription: '',
        SupplierID: '',
        CategoryID: '',
        QuantityPerUnit: '',
        UnitPrice: '',
        UnitWeight: '',
        Size: '',
        Discount: '',
        UnitsInStock: '',
        UnitsonOrder: '',
        ReorderLevel: '',
        ProductAvailable: true,
        Note: ''
    });

    const [apiResponse, setApiResponse] = useState({ message: '', isError: false });

    const formRef = useRef(null);

    // Populate form with current product data when editing
    useEffect(() => {
        if (currentProduct) {
            setFormData(currentProduct);
        } else {
            setFormData({
                ProductName: '',
                ProductDescription: '',
                SupplierID: '',
                CategoryID: '',
                QuantityPerUnit: '',
                UnitPrice: '',
                UnitWeight: '',
                Size: '',
                Discount: '',
                UnitsInStock: '',
                UnitsonOrder: '',
                ReorderLevel: '',
                ProductAvailable: true,
                Note: ''
            });
        }
    }, [currentProduct]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        const updatedFormData = {
            ProductName: form.ProductName.value,
            ProductDescription: form.ProductDescription.value,
            SupplierID: form.SupplierID.value,
            CategoryID: form.CategoryID.value,
            QuantityPerUnit: form.QuantityPerUnit.value,
            UnitPrice: form.UnitPrice.value,
            UnitWeight: form.UnitWeight.value,
            Size: form.Size.value,
            Discount: form.Discount.value,
            UnitsInStock: form.UnitsInStock.value,
            UnitsonOrder: form.UnitsonOrder.value,
            ReorderLevel: form.ReorderLevel.value,
            ProductAvailable: form.ProductAvailable.checked,
            Note: form.Note.value
        };

        try {
            if (currentProduct) {
                await dispatch(updateExistingProduct(currentProduct.ProductID, updatedFormData));
                setApiResponse({ message: 'Product updated successfully!', isError: false });
            } else {
                await dispatch(createNewProduct(updatedFormData));
                setApiResponse({ message: 'Product created successfully!', isError: false });
            }
        } catch (error) {
            setApiResponse({ message: error.response?.data?.message || 'Error occurred while processing the request.', isError: true });
        }
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentProduct ? 'Edit Product' : 'Add New Product'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group controlId="ProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.ProductName}
                            placeholder="Enter Product Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="ProductDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.ProductDescription}
                            placeholder="Enter Product Description"
                        />
                    </Form.Group>

                    <Form.Group controlId="SupplierID">
                        <Form.Label>Supplier ID</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.SupplierID}
                            placeholder="Enter Supplier ID"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="CategoryID">
                        <Form.Label>Category ID</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.CategoryID}
                            placeholder="Enter Category ID"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="QuantityPerUnit">
                        <Form.Label>Quantity Per Unit</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.QuantityPerUnit}
                            placeholder="Enter Quantity Per Unit"
                        />
                    </Form.Group>

                    <Form.Group controlId="UnitPrice">
                        <Form.Label>Unit Price</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            defaultValue={formData.UnitPrice}
                            placeholder="Enter Unit Price"
                        />
                    </Form.Group>

                    <Form.Group controlId="UnitWeight">
                        <Form.Label>Unit Weight</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            defaultValue={formData.UnitWeight}
                            placeholder="Enter Unit Weight"
                        />
                    </Form.Group>

                    <Form.Group controlId="Size">
                        <Form.Label>Size</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={formData.Size}
                            placeholder="Enter Size"
                        />
                    </Form.Group>

                    <Form.Group controlId="Discount">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            defaultValue={formData.Discount}
                            placeholder="Enter Discount"
                        />
                    </Form.Group>

                    <Form.Group controlId="UnitsInStock">
                        <Form.Label>Units In Stock</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.UnitsInStock}
                            placeholder="Enter Units In Stock"
                        />
                    </Form.Group>

                    <Form.Group controlId="UnitsonOrder">
                        <Form.Label>Units on Order</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.UnitsonOrder}
                            placeholder="Enter Units on Order"
                        />
                    </Form.Group>

                    <Form.Group controlId="ReorderLevel">
                        <Form.Label>Reorder Level</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={formData.ReorderLevel}
                            placeholder="Enter Reorder Level"
                        />
                    </Form.Group>

                    <Form.Group controlId="ProductAvailable">
                        <Form.Check
                            type="checkbox"
                            label="Product Available"
                            defaultChecked={formData.ProductAvailable}
                        />
                    </Form.Group>

                    <Form.Group controlId="Note">
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            defaultValue={formData.Note}
                            placeholder="Enter any additional notes"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {currentProduct ? 'Update Product' : 'Create Product'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
