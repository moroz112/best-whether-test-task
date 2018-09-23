import { combineReducers } from 'redux';
import cities from './cities';
import city from './city';
import bestcity from './bestcity';
import loading from "./loading";

export default combineReducers({
    cities,
    city,
    bestcity,
    loading
})