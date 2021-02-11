import { put, takeLatest, all, call, takeEvery } from "redux-saga/effects";

import { PRODUCT } from "../constants";
import { fetchStrapi } from "../../utils/callStrapi";
import { graphQLCaller } from "../../libs/backend";

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

export function* queryProducts() {
  try {
    const { products } = yield graphQLCaller(`query {
      products {
        title,
        slug,
        where,
        price,
        og_image  {
          url
        },
        promotion
      }
    }`);
    yield put({
      type: PRODUCT.update,
      products,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* queryProductDetail({ slug }) {
  try {
    const { products: productDetails } = yield graphQLCaller(`query{
      products(where: {
        slug: "${slug}" 
      }) {
        title,
        details,
        price,
        og_image {
          url
        },
        detail_images {
          url
        }
      }
    }`);
    yield put({
      type: PRODUCT.update,
      productDetails: {...productDetails[0] },
    });
  } catch (error) {
    console.log(error)
  }
}

export function* queryPromotionProducts (){
  try {
    const { products } = yield graphQLCaller(`query{
      products(where:{ promotion: "true" }) {
        og_image{
          url
        },
        slug,
        title,
        price,
      }
    }`);
    yield put({
      type: PRODUCT.update,
      products,
    });
  } catch (error) {
    
  }
}

export const handlerProducts = () => ({
  type: PRODUCT.handlers.get,
});
export const handlerPromotionProduct = () => ({
  type: PRODUCT.handlers.getPromotion,
});
export const handlerGetProductDetails = (slug) => ({
  type: PRODUCT.handlers.getDetails,
  slug,
});

export default function* saga() {
  yield all([
    yield takeLatest(PRODUCT.handlers.get, queryProducts),
    yield takeLatest(PRODUCT.handlers.getPromotion, queryPromotionProducts),
    yield takeLatest(PRODUCT.handlers.getDetails, queryProductDetail),
  ]);
}
