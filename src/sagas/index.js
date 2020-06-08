import { call, put, takeLatest, all } from "redux-saga/effects";

import { REQUEST_DATA_COVID, receiveDataCovid, receiveDataCountry, REQUEST_DATA_COUNTRY, REQUEST_DATA_COUNTRIES, receiveDataCovidMap, REQUEST_DATA_COVID_MAP } from "../actions/index";

import { fetchAPI, fetchAPIDataCountryCovid, fetchDataAPICountriesCovid, fetchDataMapCovid } from '../api/index'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAPICovid(action) {
    try {
        const data = yield call(fetchAPI)
        yield put(receiveDataCovid(data));
    } catch (e) {
        console.log(e)
    }
}
function* fetchAPICountry(action) {
    try {
        const data = yield call(fetchAPIDataCountryCovid, action.payload)
        yield put(receiveDataCountry(data));
    } catch (e) {
        console.log(e)
    }
}

function* fetchAPICountries(action) {
    try {
        const data = yield call(fetchDataAPICountriesCovid)
        yield put(receiveDataCountry(data))
    } catch (error) {
        console.log(error)
    }
}

function* fetchAPICovidMap(action) {
    try {
        const data = yield call(fetchDataMapCovid)
        // console.log("function*fetchAPICovidMap -> data", data)
        yield put(receiveDataCovidMap(data))
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(REQUEST_DATA_COVID, fetchAPICovid),
        takeLatest(REQUEST_DATA_COUNTRY, fetchAPICountry),
        takeLatest(REQUEST_DATA_COUNTRIES, fetchAPICountries),
        takeLatest(REQUEST_DATA_COVID_MAP, fetchAPICovidMap),
    ])
}

// yield takeLatest(REQUEST_DATA_COUNTRIES,  )
