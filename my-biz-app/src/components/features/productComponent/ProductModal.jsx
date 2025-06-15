import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewProduct, updateExistingProduct } from './ProductAction';
import './ProductModal.css'; // Import the CSS file

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

    // Populate form with current product data when editing
    useEffect(() => {
        if (currentProduct) {
            setFormData(currentProduct);
        } else {
            // Reset form for new product
            setFormData({
                ProductName: '', ProductDescription: '', SupplierID: '', CategoryID: '', 
                QuantityPerUnit: '', UnitPrice: '', UnitWeight: '', Size: '', Discount: '', 
                UnitsInStock: '', UnitsonOrder: '', ReorderLevel: '', ProductAvailable: true, Note: ''
            });
        }
    }, [currentProduct]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentProduct) {
                await dispatch(updateExistingProduct(currentProduct.ProductID, formData));
            } else {
                await dispatch(createNewProduct(formData));
            }
        } catch (error) {
            console.error('Error processing product:', error);
        }
        handleClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{currentProduct ? 'Edit Product' : 'Add New Product'}</h2>
                    <button className="close-button" onClick={handleClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        {/* Two-column grid for most input fields */}
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="ProductName">Product Name</label>
                                <input type="text" id="ProductName" name="ProductName" value={formData.ProductName || ''} onChange={handleChange} required />
                            </div>
                             <div className="form-group">
                                <label htmlFor="SupplierID">Supplier ID</label>
                                <input type="number" id="SupplierID" name="SupplierID" value={formData.SupplierID || ''} onChange={handleChange} required />
                            </div>
                             <div className="form-group">
                                <label htmlFor="CategoryID">Category ID</label>
                                <input type="number" id="CategoryID" name="CategoryID" value={formData.CategoryID || ''} onChange={handleChange} required />
                            </div>
                             <div className="form-group">
                                <label htmlFor="QuantityPerUnit">Quantity Per Unit</label>
                                <input type="text" id="QuantityPerUnit" name="QuantityPerUnit" value={formData.QuantityPerUnit || ''} onChange={handleChange} />
                            </div>
                             <div className="form-group">
                                <label htmlFor="UnitPrice">Unit Price</label>
                                <input type="number" step="0.01" id="UnitPrice" name="UnitPrice" value={formData.UnitPrice || ''} onChange={handleChange} />
                            </div>
                             <div className="form-group">
                                <label htmlFor="UnitWeight">Unit Weight</label>
                                <input type="number" step="0.01" id="UnitWeight" name="UnitWeight" value={formData.UnitWeight || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Size">Size</label>
                                <input type="text" id="Size" name="Size" value={formData.Size || ''} onChange={handleChange} />
                            </div>
                             <div className="form-group">
                                <label htmlFor="Discount">Discount</label>
                                <input type="number" step="0.01" id="Discount" name="Discount" value={formData.Discount || ''} onChange={handleChange} />
                            </div>
                             <div className="form-group">
                                <label htmlFor="UnitsInStock">Units In Stock</label>
                                <input type="number" id="UnitsInStock" name="UnitsInStock" value={formData.UnitsInStock || ''} onChange={handleChange} />
                            </div>
                             <div className="form-group">
                                <label htmlFor="UnitsonOrder">Units on Order</label>
                                <input type="number" id="UnitsonOrder" name="UnitsonOrder" value={formData.UnitsonOrder || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ReorderLevel">Reorder Level</label>
                                <input type="number" id="ReorderLevel" name="ReorderLevel" value={formData.ReorderLevel || ''} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Full-width text areas */}
                        <div className="form-group">
                            <label htmlFor="ProductDescription">Product Description</label>
                            <textarea id="ProductDescription" name="ProductDescription" rows="3" value={formData.ProductDescription || ''} onChange={handleChange}></textarea>
                        </div>
                         <div className="form-group">
                            <label htmlFor="Note">Note</label>
                            <textarea id="Note" name="Note" rows="3" value={formData.Note || ''} onChange={handleChange}></textarea>
                        </div>
                        
                        {/* Checkbox */}
                        <div className="form-group checkbox-group">
                           <input type="checkbox" id="ProductAvailable" name="ProductAvailable" checked={!!formData.ProductAvailable} onChange={handleChange} />
                           <label htmlFor="ProductAvailable">Product Available</label>
                        </div>

                        {/* Form action buttons */}
                        <div className="form-actions">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                            <button type="submit" className="btn btn-primary">{currentProduct ? 'Update Product' : 'Create Product'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
