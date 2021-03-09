import { put, takeLatest, all, call } from "redux-saga/effects";

import { BLOG } from "../constants";
import { fetchStrapi } from "../../utils/callStrapi";
import {
  graphQLCaller
} from '../../libs/backend';


export function* queryPosts  () {
  try {
    const { posts } = yield graphQLCaller(`query {
      posts {
        title,
        where,
        shortDesc,
        og_image {
          url
        },
        slug
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

export function* queryPostDetail({ slug }) {
  try {
    const { baiViets: postDetails } = yield graphQLCaller(`query{
      baiViets(where:{ slug: "${slug}" }) {
        tieuDe,
        anhGioiThieu {
          url
        },
        tags {
          tagName
        },
        mien{
          ten
        }
        noiDung,
        published_at,
      }
    }`);
    yield put({
      type: BLOG.update,
      postDetails: {...postDetails[0]},
    });
  } catch (error) {
    console.log(error)
  }
}



export const handlerGetPosts = () => ({
  type: BLOG.handlers.get,
});
export const handlerGetPostDetails = (slug) => ({
  type: BLOG.handlers.getDetails,
  slug,
});

export default function* saga() {
  yield all([
    yield takeLatest(BLOG.handlers.get, queryPosts),
    yield takeLatest(BLOG.handlers.getDetails, queryPostDetail),
  ]);
}
