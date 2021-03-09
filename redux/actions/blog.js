import { put, takeLatest, all, call } from "redux-saga/effects";

import { BLOG } from "../constants";
import { fetchStrapi } from "../../utils/callStrapi";
import {
  graphQLCaller
} from '../../libs/backend';


export function* queryPosts  ({ the_loai }) {
  try {
    const { baiViets: posts } = yield graphQLCaller(`query {
      baiViets(where:{ the_loai: {
        name: "${the_loai}"
      }}) {
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
        published_at,
        slug,
        mota
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
export function* queryAllPosts  () {
  try {
    const { baiViets: posts } = yield graphQLCaller(` query {
      baiViets {
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
        published_at,
        slug,
        mota,
        the_loai {
          name
        }
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



export const handlerGetPosts = (the_loai) => ({
  type: BLOG.handlers.get,
  the_loai
});
export const handlerGetAllPosts = () => ({
  type: BLOG.handlers.getAll,
});
export const handlerGetPostDetails = (slug) => ({
  type: BLOG.handlers.getDetails,
  slug,
});

export default function* saga() {
  yield all([
    yield takeLatest(BLOG.handlers.get, queryPosts),
    yield takeLatest(BLOG.handlers.getAll, queryAllPosts),
    yield takeLatest(BLOG.handlers.getDetails, queryPostDetail),
  ]);
}
