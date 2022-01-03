import { actionType } from '../contents/actionType';
export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products,
    };
};
export const selectedProduct = (products) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: products,
    };
};