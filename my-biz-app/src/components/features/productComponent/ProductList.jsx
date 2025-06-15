import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from './ProductAction'; 
import { getSuppliers } from '../supplierComponent/SupplierAction';
import { getCategories } from '../categoryComponent/CategoryAction';
import ProductModal from './ProductModal';
import './productList.css'; 





const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
  const fileInputRef = useRef(null);
  const [expandedRowId, setExpandedRowId] = useState(null);


  const suppliers = useSelector((state) => state.suppliers.suppliers);
  const categories = useSelector((state) => state.categories.categories);

  const supplierMap = useMemo(() => 
    suppliers.reduce((acc, supplier) => {
      acc[supplier.SupplierID] = supplier.CompanyName;
      return acc;
    }, {}), [suppliers]);

  const categoryMap = useMemo(() =>
    categories.reduce((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {}), [categories]);

    useEffect(() => {
      dispatch(getProducts());
      dispatch(getSuppliers());
      dispatch(getCategories());
    }, [dispatch]);
  
  const showMessage = (text, type = 'success', duration = 4000) => {
      setStatusMessage({ text, type });
      setTimeout(() => setStatusMessage({ text: '', type: '' }), duration);
  };

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
    showMessage(`Product with ID ${id} deleted.`);
  };

  const handleRowClick = (productId) => {
    setExpandedRowId(expandedRowId === productId ? null : productId);
  };
  // const handleBulkUploadClick = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //       try {
  //           const text = e.target.result;
  //           const lines = text.split(/\r\n|\n/).filter(line => line.trim() !== '');
  //           if (lines.length < 2) {
  //               throw new Error("CSV file must have a header and at least one data row.");
  //           }
  //           const headers = lines[0].split(',').map(h => h.trim());
  //           const requiredHeaders = ['ProductName', 'SupplierID', 'CategoryID', 'UnitPrice', 'UnitsInStock'];
            
  //           const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
  //           if (missingHeaders.length > 0) {
  //                throw new Error(`CSV is missing required headers: ${missingHeaders.join(', ')}`);
  //           }
            
  //           const productsArray = lines.slice(1).map(line => {
  //               const data = line.split(',');
  //               const product = {};
  //               headers.forEach((header, index) => {
  //                   const value = data[index] ? data[index].trim() : '';
  //                   if (['SupplierID', 'CategoryID', 'UnitsInStock'].includes(header)) {
  //                      product[header] = parseInt(value, 10) || 0;
  //                   } else if (header === 'UnitPrice') {
  //                      product[header] = parseFloat(value) || 0.0;
  //                   } else {
  //                      product[header] = value;
  //                   }
  //               });
  //               return product;
  //           });
            
  //           // Dispatch a new action to handle bulk adding
  //           dispatch(addProductsInBulk(productsArray));
  //           showMessage(`${productsArray.length} products uploaded successfully!`, 'success');

  //       } catch (error) {
  //           console.error("Error parsing CSV:", error);
  //           showMessage(`Error: ${error.message}`, 'error');
  //       } finally {
  //           event.target.value = null; // Reset file input
  //       }
  //   };
  //   reader.readAsText(file);
  // };

  const DetailItem = ({ label, value }) => (
    <div className="detail-item">
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </div>
  );

  return (
    <div className="product-list-container">
      <div className="header-actions">
        <h1>Product Inventory</h1>
        <div className="button-group">
            <button className="btn btn-purple" >Bulk Upload</button>
            {/* <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden-file-input" accept=".csv" /> */}
            <button className="btn btn-primary" onClick={() => handleShow()}>Add New Product</button>
        </div>
      </div>
      
       {statusMessage.text && (
         <div className={`status-message ${statusMessage.type}`}>
            {statusMessage.text}
        </div>
      )}

      <div className="table-wrapper">
        <table className="product-table">
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
              <React.Fragment key={product.ProductID}>
                <tr className="main-row" onClick={() => handleRowClick(product.ProductID)}>
                  <td>{product.ProductName}</td>
                  <td>{supplierMap[product.SupplierID] || 'N/A'}</td>
                  <td>{categoryMap[product.CategoryID] || 'N/A'}</td>
                  <td>${(product.UnitPrice || 0).toFixed(2)}</td>
                  <td>{product.UnitsInStock}</td>
                  <td className="action-buttons">
                    <button className="btn btn-info" onClick={(e) => { e.stopPropagation(); handleShow(product);}}>Edit</button>
                    <button className="btn btn-danger" onClick={(e) => handleDelete(product.ProductID, e)}>Delete</button>
                  </td>
                </tr>
                {expandedRowId === product.ProductID && (
                  <tr className="details-row">
                    <td colSpan="6">
                      <div className="details-grid">
                        <div className="details-column">
                          <DetailItem label="Description" value={product.ProductDescription || 'N/A'} />
                          <DetailItem label="Quantity Per Unit" value={product.QuantityPerUnit || 'N/A'} />
                          <DetailItem label="Unit Weight" value={product.UnitWeight || 'N/A'} />
                          <DetailItem label="Size" value={product.Size || 'N/A'} />
                        </div>
                        <div className="details-column">
                           <DetailItem label="Discount" value={product.Discount || 'N/A'} />
                           <DetailItem label="Units on Order" value={product.UnitsonOrder || 'N/A'} />
                           <DetailItem label="Reorder Level" value={product.ReorderLevel || 'N/A'} />
                           <DetailItem label="Available" value={product.ProductAvailable ? 'Yes' : 'No'} />
                        </div>
                         <div className="details-column-full">
                           <DetailItem label="Note" value={product.Note || 'N/A'} />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <ProductModal
        show={showModal}
        handleClose={handleClose}
        currentProduct={currentProduct}
      />
    </div>
  );
};

export default ProductList;
