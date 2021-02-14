import AsyncStorage from '@react-native-async-storage/async-storage';
import {WeatherType} from 'modules/weather/redux/type';

export const getAsyncStore = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value ? JSON.parse(value) : null;
  } catch (error) {
    return null;
  }
};

export const setAsyncStore = async (value: WeatherType, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {}
};

export const deleteAsyncStore = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

export enum AsyncStoreKeys {
  weather = 'AsyncStoreKeys-WEATHER',
}
