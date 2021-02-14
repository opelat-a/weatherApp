//Core
import {applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#a57101',
    error: () => '#ff0005',
  },
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;
const middleware = [sagaMiddleware];

if (__DEV__) {
  middleware.push(logger);
}
const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export {enhancedStore, sagaMiddleware};
