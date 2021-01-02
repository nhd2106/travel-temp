import { put, takeLatest, all, call } from "redux-saga/effects";

import { USER } from "../constants";

function* updateUser({ user }) {
  try {
    yield put({
      type: USER.update,
      user,
    });
  } catch (error) {
    console.log(error);
  }
}

export const signInHandler = (user) => ({
  type: USER.signin,
  user
});
export const signOutHandler = () => ({
  type: USER.signOut,
  user: null
});

export default function* saga() {
  yield all([
    yield takeLatest(USER.signin, updateUser),
    yield takeLatest(USER.signOut, updateUser),
  ]);
}
