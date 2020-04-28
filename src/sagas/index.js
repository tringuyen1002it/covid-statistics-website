import { call, put, takeLatest, all } from "redux-saga/effects";

import { REQUEST_DATA_COVID, receiveDataCovid, receiveDataCountries, REQUEST_DATA_COUNTRIES } from "../actions/index";

import { fetchAPI, fetchAPIDataCountries } from '../api/index'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAPICovid(action) {
    try {
        const data = yield call(fetchAPI)
        yield put(receiveDataCovid(data));
    } catch (e) {
        console.log(e)
    }
}
// function* fetchAPIContries(action) {
//     try {
//         const data = yield call(fetchAPIDataCountries)
//         yield put(receiveDataCountries(data))
//     } catch (e) {
//         console.log(e)
//     }
// }
function* fetchAPICountry(action) {
    try {
        const data = yield call(fetchAPIDataCountries)
        yield put(receiveDataCountries(data));
    } catch (e) {
        console.log(e)
    }
}
export default function* rootSaga() {
    yield all([takeLatest(REQUEST_DATA_COVID, fetchAPICovid), yield takeLatest(REQUEST_DATA_COUNTRIES, fetchAPICountry)])
    // yield takeLatest(REQUEST_DATA_COUNTRY_COVID, fetchAPICountry)
}
