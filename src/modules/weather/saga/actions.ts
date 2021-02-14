import {Constants} from './constans';

export const getWeatherWithName = (
  payload: string,
): GetWeatherWithNameType => ({
  type: Constants.GET_WEATHER_WITH_NAME,
  payload,
});

export type GetWeatherWithNameType = {
  type: Constants.GET_WEATHER_WITH_NAME;
  payload: string;
};
