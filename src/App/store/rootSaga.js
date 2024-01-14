import { all } from "redux-saga/effects";
import userSaga from "../../sections/user/userSaga";

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
