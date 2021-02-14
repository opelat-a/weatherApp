import {setWeatherWithName} from 'modules/weather/redux/actions';
import {WeatherType} from 'modules/weather/redux/type';
import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {AsyncStoreKeys, getAsyncStore} from './asyncStore';

export function* initSaga(): SagaIterator {
  try {
    const getWeatherASyncStore: WeatherType | null = yield call(
      getAsyncStore,
      AsyncStoreKeys.weather,
    );
    yield put(setWeatherWithName(getWeatherASyncStore));
  } catch (error) {}
}
