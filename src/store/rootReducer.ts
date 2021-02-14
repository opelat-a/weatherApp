import {combineReducers} from 'redux';
import weatherReducer from '@modules/weather/redux';

export const rootReducer = combineReducers({
  weatherReducer,
});
