import React from 'react';
import {useDispatch} from 'react-redux';
import {getWeatherWithName} from './saga/actions';
import {setWeatherWithName} from './redux/actions';

export const useWeather = () => {
  const dispatch = useDispatch();

  const getWeather = (city: string) => {
    dispatch(getWeatherWithName(city));
  };

  const anotherCity = () => {
    dispatch(setWeatherWithName(null));
  };

  return {getWeather, anotherCity};
};
