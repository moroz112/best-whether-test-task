import {FETCH_BEST_CITY_START, FETCH_BEST_CITY_SUCCESS} from '../actionTypes';
import { ReducerBase } from "../types";

export interface cityReducerData extends ReducerBase{
    payload: any
}

const initialState = false;

export default (state = initialState, {type}: cityReducerData) => {
    switch (type) {
        case FETCH_BEST_CITY_START:
            return true;
        case FETCH_BEST_CITY_SUCCESS:
            return false;
        default:
            return state
    }
}