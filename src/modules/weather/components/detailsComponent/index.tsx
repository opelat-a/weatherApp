import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {WeatherType} from 'modules/weather/redux/type';
import {Button, MainContainer, Text} from 'modules/weather/styles';
import {useWeather} from 'modules/weather/useWeather';
import {useSelectorTs} from 'services/selector';
import {Localization} from 'services/localization';

export const WeatherDetailComponent = memo(() => {
  const weather = useSelectorTs(
    (state) => state.weatherReducer.weather,
    isEqual,
  ) as WeatherType;

  const {anotherCity} = useWeather();

  const onPressHandler = () => {
    anotherCity();
  };

  /*вынести перменные в локализацию */
  return (
    <MainContainer>
      <Text>
        {weather.name}: {weather.main?.temp}&#176;
      </Text>
      <Text>Ощущается как: {weather.main?.feels_like}&#176;</Text>
      <Text>Скорость ветра: {weather.wind?.speed} м/с</Text>
      <Text>Влажность: {weather.main?.humidity}%</Text>
      <Text>
        Облачность: {weather.clouds?.all}%, {weather?.weather[0]?.description}
      </Text>
      <Button onPress={onPressHandler}>
        <Text>{Localization.anotherCity}</Text>
      </Button>
    </MainContainer>
  );
});
