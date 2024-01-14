import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../utils/helper/fetch";
import { getData, loadData } from "./userSlice";

function* get_crypto_data() {
  try {
    const userresponse = yield call(fetchData, "https://dummyjson.com/users");
    if (userresponse?.status === 200) {
      yield put(loadData(userresponse));
    }
  } catch (err) {
    console.log(err);
  }
}
export default function* counterSaga() {
  yield takeLatest(getData.type, get_crypto_data);
}
