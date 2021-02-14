import React, {memo, useState} from 'react';
import isEqual from 'react-fast-compare';
import {useDispatch} from 'react-redux';
//
import {setWeatherError} from 'modules/weather/redux/actions';
import {Button, Text, TextInput} from 'modules/weather/styles';
import {useWeather} from 'modules/weather/useWeather';
import {Localization} from 'services/localization';
import {useSelectorTs} from 'services/selector';

export const WeatherSerchComponent = memo(() => {
  const isError = useSelectorTs((state) => state.weatherReducer.error, isEqual);
  const [city, setCity] = useState('');
  const {getWeather} = useWeather();

  const dispatch = useDispatch();

  const onPressHandler = (city: string) => {
    getWeather(city);
    setCity('');
  };

  const onChangeText = (text: string) => {
    setCity(text);
    isError && dispatch(setWeatherError(null));
  };

  return (
    <>
      {isError && (
        <Text color="red">
          {Localization.responseStatus['' + isError] || Localization.error}
        </Text>
      )}
      <TextInput onChangeText={(text) => onChangeText(text)} value={city} />
      <Button onPress={() => onPressHandler(city)} disabled={!city}>
        <Text>{Localization.searchWeather}</Text>
      </Button>
    </>
  );
});
