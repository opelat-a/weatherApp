import {Constants} from './constants';
import {Action, State} from './type';

const initialState: State = {
  weather: null,
  fetch: false,
  error: null,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.SET_WEATHER_WITH_NAME:
      return {
        ...state,
        weather: action.payload,
      };
    case Constants.SET_WEATHER_FETCH:
      return {
        ...state,
        fetch: action.payload,
      };
    case Constants.SET_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
