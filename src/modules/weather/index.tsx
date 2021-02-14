import React, {FC, memo} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelectorTs} from '@services/selector';
import isEqual from 'react-fast-compare';
import {MainContainer} from './styles';
import {WeatherMainComponent} from './components/mainComponent';

const DefaultWeatherScreen: FC = () => {
  const isFetch = useSelectorTs((state) => state.weatherReducer.fetch, isEqual);
  return (
    <MainContainer>
      {isFetch ? (
        <ActivityIndicator color="#cd84f1" size="large" />
      ) : (
        <WeatherMainComponent />
      )}
    </MainContainer>
  );
};

export const WeatherScreen = memo(DefaultWeatherScreen);
