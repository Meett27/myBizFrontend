import{getAllSuppliers,createSupplier,updateSupplier,deleteSupplierById} from './SupplierApi';


export const GET_SUPPLIERS = 'GET_SUPPLIERS';
export const CREATE_SUPPLIER = 'CREATE_SUPPLIER';
export const UPDATE_SUPPLIER = 'UPDATE_SUPPLIER';
export const DELETE_SUPPLIER = 'DELETE_SUPPLIER';
export const GET_SUPPLIERS_BY_NAME = 'GET_SUPPLIERS_BY_NAME';
export const GET_SUPPLIERS_BY_ID = 'GET_SUPPLIERS_BY_ID';

export const getSuppliers = () => async (dispatch) => {
    try {
        const suppliers = await getAllSuppliers();
        dispatch({
            type: 'GET_SUPPLIERS',
            payload: suppliers
        });
    } catch (error) {
        console.error('Error fetching suppliers:', error);
    }
};  

export const fetchSupplierById = (id) => async (dispatch) => {
    try {
        const supplier = await getSupplierById(id);
        dispatch({
            type: 'GET_SUPPLIERS_BY_ID',
            payload: supplier,
        });
    } catch (error) {
        console.error(`Error fetching supplier with ID ${id}:`, error);
    }
};

export const createNewSupplier = (supplierData) => async (dispatch) => {
    try {
        const newSupplier = await createSupplier(supplierData);
        dispatch({
            type: 'CREATE_SUPPLIER',
            payload: newSupplier,
        });
    } catch (error) {
        console.error('Error creating supplier:', error);
    }
};

export const updateExistingSupplier = (id, supplierData) => async (dispatch) => {
    try {
        const updatedSupplier = await updateSupplier(id, supplierData);
        dispatch({
            type: 'UPDATE_SUPPLIER',
            payload: updatedSupplier,
        });
    } catch (error) {
        console.error('Error updating supplier:', error);
    }
};

export const deleteSupplier = (id) => async (dispatch) => {
    try {
        await deleteSupplierById(id);
        dispatch({
            type: 'DELETE_SUPPLIER',
            payload: id,
        });
    } catch (error) {
        console.error('Error deleting supplier:', error);
    }
};