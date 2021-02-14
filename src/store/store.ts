//Core
import {createStore} from 'redux';

//reducer
import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';

import {enhancedStore, sagaMiddleware} from './middleware/core';

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
