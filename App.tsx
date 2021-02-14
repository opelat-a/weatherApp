import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {WeatherScreen} from '@modules/weather';

const App: FC = () => {
  return (
    <Provider store={store}>
      <WeatherScreen />
    </Provider>
  );
};

export default App;
