import { FETCH_CITY_SUCCESS } from '../actionTypes';
import { ReducerBase } from "../types";

export interface cityReducerData extends ReducerBase{
    city: any
}

const initialState = null;

export default (state = initialState, {type, city}: cityReducerData) => {
    switch (type) {
        case FETCH_CITY_SUCCESS:
            return city.main;
        default:
            return state
    }
}