import {all, call} from 'redux-saga/effects';
import weatherSaga from '@modules/weather/saga';
import {initSaga} from '@services/initSaga';

const sagasList = [weatherSaga, initSaga];

export default function* watchRootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
