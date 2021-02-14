import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {useSelectorTs} from 'services/selector';
import {WeatherDetailComponent} from '../detailsComponent';
import {WeatherSerchComponent} from '../searchComponent';

export const WeatherMainComponent = memo(() => {
  const weather = useSelectorTs(
    (state) => state.weatherReducer.weather,
    isEqual,
  );

  return (
    <>{!!weather ? <WeatherDetailComponent /> : <WeatherSerchComponent />}</>
  );
});
