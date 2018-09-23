import {
    FETCH_CITIES_START,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
    FETCH_CITY_START,
    FETCH_BEST_CITY_START,
    FETCH_BEST_CITY_SUCCESS,
    FETCH_BEST_CITY_FAILURE
} from '../actionTypes';
import {fetchCities} from "../api";
import { APPID, BEST_TEMP_VALUE } from "../types";


export const fetchCityById = (cityId) => dispatch => {
    dispatch({type: FETCH_CITY_START, payload: {cityId}});
};

export const fetchBestCity = (cities) => async dispatch => {
    dispatch({type: FETCH_BEST_CITY_START});

    try {
        let bestCityTempValue = 3000;
        let bestCity = {};

        for (let i = 0; i < cities.length; i++) {
            let cityData = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cities[i].id}${APPID}`);
            let cityDataJson = await cityData.json();

            if (Math.abs(cityDataJson.main.temp - BEST_TEMP_VALUE) < bestCityTempValue) {
                bestCityTempValue = cityDataJson.main.temp;
                bestCity = cityDataJson;
            }
        }
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

