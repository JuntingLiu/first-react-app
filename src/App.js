import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header/index';

function App() {
  return (
    <Provider store={store}>
      <Header ></Header>
      hello world
    </Provider>
  );
}

export default App;
