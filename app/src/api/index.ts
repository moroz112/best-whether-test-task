import { citiesData } from "../cities";
import {APPID, BEST_TEMP_VALUE} from "../types";

export const fetchCities = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(citiesData)
        }, 100)
    })
};

export const fetchCity = async (cities) => {
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

    return bestCity;
};