import { actionType } from "../contents/actionType";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProduct = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionType.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};