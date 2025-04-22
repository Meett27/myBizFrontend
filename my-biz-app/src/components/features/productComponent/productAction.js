import {
    fetchAllProducts,
    createProduct,
    updateProduct,
    deleteProductById
} from './ProductApi';


export const GET_PRODUCTS = 'GET_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Action to get all products
export const getProducts = () => async (dispatch) => {
    try {
        const products = await fetchAllProducts();
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

// Action to create a new product
export const createNewProduct = (productData) => async (dispatch) => {
    try {
        const newProduct = await createProduct(productData);
        dispatch({
            type: CREATE_PRODUCT,
            payload: newProduct
        });
    } catch (error) {
        console.error("Error creating product:", error);
    }
};

// Action to update an existing product
export const updateExistingProduct = (id, productData) => async (dispatch) => {
    try {
        const updatedProduct = await updateProduct(id, productData);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: updatedProduct
        });
    } catch (error) {
        console.error("Error updating product:", error);
    }
};

// Action to delete a product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await deleteProductById(id);
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        });
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};
