export const APPID = '&APPID=8adf9b46b1a97bb345011c2db5ebb954';
export const BEST_TEMP_VALUE = 283;

export interface City {
    id: number,
    name: string
}

export interface ReducerBase {
    type: string,
    payload: any
}

export interface AppProps {
    cityMain: any,
    loading: boolean,
    cities: Array<City>,
    bestcity: any,
    fetchCitiesData: Function,
    fetchCityById: Function
    fetchBestCity: Function
}