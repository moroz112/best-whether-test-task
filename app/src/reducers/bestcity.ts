import {FETCH_BEST_CITY_START, FETCH_BEST_CITY_SUCCESS} from '../actionTypes';
import { ReducerBase } from "../types";

export interface cityReducerData extends ReducerBase{
    payload: any
}

const initialState = null;

export default (state = initialState, {type, payload}: cityReducerData) => {
    switch (type) {
        case FETCH_BEST_CITY_START:
            return initialState;
        case FETCH_BEST_CITY_SUCCESS:
            return payload;
        default:
            return state
    }
}