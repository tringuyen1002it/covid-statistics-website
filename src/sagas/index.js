import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_DATA_COVID, receiveDataCovid } from "../actions/index";

import { fetchData } from '../api/index'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
    try {
        const data = yield call(fetchData)
        yield put(receiveDataCovid(data));
    } catch (e) {
        console.log(e)
    }
}
export default function* rootSaga() {
    yield takeLatest(REQUEST_DATA_COVID, helloWorld);
}
