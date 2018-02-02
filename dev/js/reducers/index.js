import {combineReducers} from 'redux';
import carReducer from './reducer-cars';
import activeCarReducer from './reducer-active-car'


const allReducers = combineReducers({
        cars : carReducer,
        activeCar:activeCarReducer
    });
export default allReducers;