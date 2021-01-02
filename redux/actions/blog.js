import { put, takeLatest, all, call } from "redux-saga/effects";

import { BLOG } from "../constants";
import { fetchStrapi } from "../../utils/callStrapi";

function* fetchPosts() {
  try {
    const { data: posts } = yield call(fetchStrapi, "posts");
    yield put({
      type: BLOG.update,
      posts,
    });
  } catch (error) {
    console.log(error);
  }
}

function* fetchPostDetails({ id }) {
  try {
    const { data: postDetails } = yield call(fetchStrapi, `posts/${id}`);
    yield put({
      type: BLOG.update,
      postDetails,
    });
  } catch (error) {
    console.log(error);
  }
}

export const handlerGetPosts = () => ({
  type: BLOG.handlers.get,
});
export const handlerGetPostDetails = (id) => ({
  type: BLOG.handlers.getDetails,
  id,
});

export default function* saga() {
  yield all([
    yield takeLatest(BLOG.handlers.get, fetchPosts),
    yield takeLatest(BLOG.handlers.getDetails, fetchPostDetails),
  ]);
}
