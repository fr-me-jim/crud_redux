import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from '../types';

//Main Function - add new product
export function addNewProduct (product) {
    return (dispatch) => {
        dispatch( newProduct() );

        dispatch( newProductSuccess(product) );
    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
});

export const newProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});