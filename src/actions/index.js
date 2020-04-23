export const REQUEST_DATA_COVID = "REQUEST_DATA_COVID";
export const RECEIVE_DATA_COVID = "RECEIVE_DATA_COVID";

export const requestDataCovid = () => ({ type: REQUEST_DATA_COVID });
export const receiveDataCovid = data => ({ type: RECEIVE_DATA_COVID, payload: data });
