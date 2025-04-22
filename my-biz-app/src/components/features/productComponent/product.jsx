import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from './productAction';
import AddProductModal from './addProductModal';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleShow = (product = null) => {
    setCurrentProduct(product);
    setShowModal(true);
    
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentProduct(null);
    dispatch(getProducts());
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <Button variant="primary" onClick={() => handleShow()}>Add New Product</Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Supplier</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ProductID}>  {/* Make sure ProductID is unique */}
              <td>{product.ProductName}</td>
              <td>{product.SupplierID}</td>
              <td>{product.CategoryID}</td>
              <td>{product.UnitPrice}</td>
              <td>{product.UnitsInStock}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(product)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(product.ProductID)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Product Modal */}
      <AddProductModal
        show={showModal}
        handleClose={handleClose}
        currentProduct={currentProduct}
      />
    </div>
  );
};

export default ProductList;
