import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api'; // Your Flask API URL

// Get all products
export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/getProducts`);
        console.log(response.data, "data from api");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// export const fetchAllProducts = async () => {
//   try {
//       const response = await fetch(`${API_BASE_URL}/product/getProducts`);
//       if (!response.ok) {
//           throw new Error("Error fetching products");
//       }
//       const data = await response.json();
//       console.log(data, "data from api");
//       return data;
//   } catch (error) {
//       console.error("Error fetching products:", error);
//       throw error;
//   }
// };

// Get a single product by ID
export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/getProduct/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};

// Create a new product
export const createProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/product/addProducts`, productData);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

// Update an existing product by ID
export const updateProduct = async (id, productData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/product/updateProduct/${id}`, productData, {
            headers: {
              'Content-Type': 'application/json'
            }});
        return response.data;
    } catch (error) {
        console.error(`Error updating product with ID ${id}:`, error);
        throw error;
    }
};

// Delete a product by ID
export const deleteProductById = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/product/deleteProduct/${id}`);
        return id;
    } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw error;
    }
};
