import {Constants} from './constants';
import {
  SetWeatherErrorType,
  SetWeatherFetchType,
  SetWeatherWithNameType,
  WeatherType,
} from './type';

export const setWeatherWithName = (
  payload: WeatherType | null,
): SetWeatherWithNameType => ({
  type: Constants.SET_WEATHER_WITH_NAME,
  payload,
});

export const setWeatherError = (
  payload: number | null,
): SetWeatherErrorType => ({
  type: Constants.SET_WEATHER_ERROR,
  payload,
});

export const setWeatherFetch = (payload: boolean): SetWeatherFetchType => ({
  type: Constants.SET_WEATHER_FETCH,
  payload,
});
