import { call, put, takeLatest } from 'redux-saga/effects'
import { APPID } from "../types";
import {
    FETCH_CITY_START,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_FAILURE
} from "../actionTypes";

function* fetchUser(action) {
    try {
        const city = yield call((cityId) => {
            return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}${APPID}`).then(function(result) {
                return result.json()
            })
        }, action.payload.cityId);

        yield put({type: FETCH_CITY_SUCCESS, city: city});
    } catch (e) {
        yield put({type: FETCH_CITY_FAILURE, message: e.message});
    }
}

function* mySaga() {
    yield takeLatest(FETCH_CITY_START, fetchUser);
}

export default mySaga