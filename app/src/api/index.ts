import { citiesData } from "../cities";

export const fetchCities = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(citiesData)
        }, 100)
    })
};