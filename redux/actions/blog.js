import { put, takeLatest, all, call } from "redux-saga/effects";

import { BLOG } from "../constants";
import { fetchStrapi } from "../../utils/callStrapi";
import {
  graphQLCaller
} from '../../libs/backend';

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

export function* queryPosts  () {
  try {
    const { posts } = yield graphQLCaller('posts', `query {
      posts {
        title,
        content,
        where,
        shortDesc,
        og_img {
          url
        },
        id
      }
    }`)
    yield put({
      type: BLOG.update,
      posts,
    });
  } catch (error) {
    console.log(error)
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
    // yield takeLatest(BLOG.handlers.get, fetchPosts),
    yield takeLatest(BLOG.handlers.get, queryPosts),
    yield takeLatest(BLOG.handlers.getDetails, fetchPostDetails),
  ]);
}
