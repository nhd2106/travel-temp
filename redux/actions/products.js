import { put, takeLatest, all, call } from "redux-saga/effects";

import { PRODUCT } from "../constants";
import { fetchStrapi } from "../../utils/callStrapi";

function* fetchProducts() {
  try {
    const { data: products } = yield call(fetchStrapi, "products");
    yield put({
      type: PRODUCT.update,
      products,
    });
  } catch (error) {
    console.log(error);
  }
}

function* fetchProductDetails({ id }) {
  try {
    const { data: productDetails } = yield call(fetchStrapi, `products/${id}`);
    yield put({
      type: PRODUCT.update,
      productDetails,
    });
  } catch (error) {
    console.log(error);
  }
}

export const handlerProducts = () => ({
  type: PRODUCT.handlers.get,
});
export const handlerGetProductDetails = (id) => ({
  type: PRODUCT.handlers.getDetails,
  id,
});

export default function* saga() {
  yield all([
    yield takeLatest(PRODUCT.handlers.get, fetchProducts),
    yield takeLatest(PRODUCT.handlers.getDetails, fetchProductDetails),
  ]);
}
