export const REQUEST_DATA_COVID = "REQUEST_DATA_COVID";
export const RECEIVE_DATA_COVID = "RECEIVE_DATA_COVID";
export const REQUEST_DATA_COUNTRIES = "REQUEST_DATA_COUNTRIES";
export const RECEIVE_DATA_COUNTRIES = "RECEIVE_DATA_COUNTRIES";


export const requestDataCovid = () => ({ type: REQUEST_DATA_COVID });
export const receiveDataCovid = data => ({ type: RECEIVE_DATA_COVID, payload: data });

export const requestDataCountries = () => ({ type: REQUEST_DATA_COUNTRIES });
export const receiveDataCountries = data => ({ type: RECEIVE_DATA_COUNTRIES, payload: data });