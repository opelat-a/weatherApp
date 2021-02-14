import React from 'react';
import {useDispatch} from 'react-redux';
import {getWeatherWithName} from './saga/actions';
import {setWeatherWithName} from './redux/actions';
import {deleteAsyncStore, AsyncStoreKeys} from 'services/asyncStore';

export const useWeather = () => {
  const dispatch = useDispatch();

  const getWeather = (city: string) => {
    dispatch(getWeatherWithName(city));
  };

  const anotherCity = () => {
    dispatch(setWeatherWithName(null));
    deleteAsyncStore(AsyncStoreKeys.weather);
  };

  return {getWeather, anotherCity};
};
