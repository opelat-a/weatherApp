import {Constants} from './constants';

export type State = {
  weather: WeatherType | null;
  error: number | null;
  fetch: boolean;
};
export type WeatherType = {
  base: string;
  cod: number;
  clouds: {
    all: number;
  };
  coord: {lon: number; lat: number};
  dt: number;
  id: number;
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  rain: {[key: string]: number};
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  wind: {speed: number; deg: number};
  weather: {id: number; main: string; description: string; icon: string}[];
};

export type SetWeatherFetchType = {
  type: Constants.SET_WEATHER_FETCH;
  payload: boolean;
};

export type SetWeatherErrorType = {
  type: Constants.SET_WEATHER_ERROR;
  payload: number | null;
};

export type SetWeatherWithNameType = {
  type: Constants.SET_WEATHER_WITH_NAME;
  payload: WeatherType | null;
};

export type Action =
  | SetWeatherWithNameType
  | SetWeatherErrorType
  | SetWeatherFetchType;
