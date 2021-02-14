import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {Constants} from './constans';
import {GetWeatherWithNameType} from './actions';
import {SagaIterator} from 'redux-saga';
import {
  setWeatherFetch,
  setWeatherError,
  setWeatherWithName,
} from '../redux/actions';
import {WeatherType} from '../redux/type';
import {apiGetWeatherWithName} from 'services/api';
import {AsyncStoreKeys, setAsyncStore} from 'services/asyncStore';

export default function* watcherWeatherSaga() {
  yield takeEvery(Constants.GET_WEATHER_WITH_NAME, workerWeather);
}

export function* workerWeather(action: GetWeatherWithNameType): SagaIterator {
  const {payload} = action;
  try {
    yield put(setWeatherFetch(true));
    const response: Response = yield call(apiGetWeatherWithName, payload);

    if (response.status === 200) {
      const data: WeatherType = yield call([response, response.json]);
      yield put(setWeatherWithName(data));
      yield fork(setAsyncStore, data, AsyncStoreKeys.weather);
    } else {
      yield put(setWeatherError(response.status));
    }
  } catch (error) {
  } finally {
    yield put(setWeatherFetch(false));
  }
}
