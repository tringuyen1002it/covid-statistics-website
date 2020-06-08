import { combineReducers } from 'redux';
import { RECEIVE_DATA_COVID, RECEIVE_DATA_COUNTRY, RECEIVE_DATA_COVID_MAP } from '../actions/index'
import _ from 'lodash'


const saveDataCorona = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA_COVID:
            return { ...state, dataCorona: action.payload }
        case RECEIVE_DATA_COUNTRY:
            return { ...state, dataCountries: action.payload }
        case RECEIVE_DATA_COVID_MAP:
            return { ...state, dataMap: action.payload.data }
        default:
            return state
    }
}

const rootReducers = combineReducers({
    data: saveDataCorona
})
export default rootReducers
