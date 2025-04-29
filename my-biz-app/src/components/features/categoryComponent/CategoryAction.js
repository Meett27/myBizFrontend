import {
    createCategory,
    deleteCategory,
    fetchAllCategories,
    updateCategory,
} from "./CategoryApi";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE CATEGORY";

export const getCategories = () => async (dispatch) => {
    try {
        const categories = await fetchAllCategories();
        dispatch({
            type: "GET_CATEGORIES",
            payload: categories,
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

export const createNewCategory = (categoryData) => async (dispatch) => {
    try {
        const newCategory = await createCategory(categoryData);
        dispatch({
            type: "CREATE_CATEGORY",
            payload: newCategory,
        });
    } catch (error) {
        console.error("Error creating category:", error);
    }
}

export const updateExistingCategory = (id, categoryData) => async (dispatch) => {
    try {
        const updatedCategory = await updateCategory(id, categoryData);
        dispatch({
            type: "UPDATE_CATEGORY",
            payload: updatedCategory,
        });
    } catch (error) {
        console.error("Error updating category:", error);
    }
}


export const deleteCategoryById = (id) => async (dispatch) => {
    try {
        await deleteCategory(id);
        dispatch({
            type: "DELETE_CATEGORY",
            payload: id,
        });
    } catch (error) {
        console.error("Error deleting category:", error);
    }
}