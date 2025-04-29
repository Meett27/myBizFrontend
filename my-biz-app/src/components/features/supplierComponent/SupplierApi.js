import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api'; // Your Flask API URL

// Get all suppliers
export const getAllSuppliers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/supplier/getSuppliers`);
        console.log(response.data, "data from api");
        return response.data;
    } catch (error) {
        console.error("Error fetching suppliers:", error);
        throw error;
    }
};  

// Get a single supplier by ID
export const getSupplierById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/supplier/supplierById/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching supplier with ID ${id}:`, error);
        throw error;
    }
};

// Create a new supplier
export const createSupplier = async (supplierData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/supplier/create_supplier`, supplierData);
        return response.data;
    } catch (error) {
        console.error("Error creating supplier:", error);
        throw error;
    }
};

// Update an existing supplier by ID
export const updateSupplier = async (id, supplierData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/supplier/update_supplier/${id}`, supplierData);
        return response.data;
    } catch (error) {
        console.error(`Error updating supplier with ID ${id}:`, error);
        throw error;
    }
};


// Delete a supplier by ID
export const deleteSupplierById = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/supplier/delete_supplier/${id}`);
        return id;
    } catch (error) {
        console.error(`Error deleting supplier with ID ${id}:`, error);
        throw error;
    }
};