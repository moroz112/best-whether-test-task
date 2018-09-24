import {
    FETCH_CITIES_START,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
    FETCH_CITY_START,
    FETCH_BEST_CITY_START,
    FETCH_BEST_CITY_SUCCESS,
    FETCH_BEST_CITY_FAILURE
} from '../actionTypes';
import { fetchCities, fetchCity } from "../api";


export const fetchCityById = (cityName) => dispatch => {
    dispatch({type: FETCH_CITY_START, payload: {cityName}});
};

export const fetchBestCity = (cities) => async dispatch => {
    dispatch({type: FETCH_BEST_CITY_START});

    try {
        let bestCity = await fetchCity(cities);

        dispatch({type: FETCH_BEST_CITY_SUCCESS, payload: bestCity})
    } catch (e) {
        dispatch({
            type: FETCH_BEST_CITY_FAILURE,
            payload: e
        })
    }
};

export const fetchCitiesData = () => async dispatch => {
    dispatch({type: FETCH_CITIES_START});

    try {
        const cities = await fetchCities();

        dispatch({
            type: FETCH_CITIES_SUCCESS,
            payload: cities
        })
    } catch (err) {
        dispatch({
            type: FETCH_CITIES_FAILURE,
            payload: err,
            error: true
        })
    }
};

