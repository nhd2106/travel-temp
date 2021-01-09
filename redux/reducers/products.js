import { PRODUCT } from "../constants";
const initialState = {
  products: [],
  productDetails: {},
};

export default function product(state = initialState, action) {
  const { products, productDetails } = action;
  switch (action.type) {
    case PRODUCT.handlers.get:
      return {
        ...state,
        handling: true,
      };
    case PRODUCT.update:
      return {
        ...state,
        products,
        productDetails,
        handling: false,
      };
    default:
      return state;
  }
}
