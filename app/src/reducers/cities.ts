import { FETCH_CITIES_SUCCESS } from '../actionTypes';
import { City, ReducerBase } from "../types";

export interface cityReducerData extends ReducerBase{
    payload: Array<City>
}

const initialState: Array<City> | null = null;

export default (state = initialState, {type, payload}: cityReducerData) => {
    switch (type) {
        case FETCH_CITIES_SUCCESS:
            return payload;
        default:
            return state
    }
}