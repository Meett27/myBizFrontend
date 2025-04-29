import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api'; // Your Flask API URL


// Get all categories
export const fetchAllCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/getCategories`);
        console.log(response.data, "data from api");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// Get a single category by ID
export const fetchCategoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/getCategory/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching category with ID ${id}:`, error);
        throw error;
    }
};


// Create a new category
export const createCategory = async (categoryData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/category/add_categories`, categoryData);
        return response.data;
    } catch (error) {
        console.error("Error creating category:", error);
        throw error;
    }
};


// Update an existing category by ID
export const updateCategory = async (id, categoryData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/category/update_category/${id}`, categoryData);
        return response.data;
    } catch (error) {
        console.error(`Error updating category with ID ${id}:`, error);
        throw error;
    }
};


// Delete a category by ID
export const deleteCategory = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/category/delete_category/${id}`);
        return id;
    } catch (error) {
        console.error(`Error deleting category with ID ${id}:`, error);
        throw error;
    }
};