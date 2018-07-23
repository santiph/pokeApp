import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from './containers/Home';
import pokemonReducers from './reducer';

const pokeStore = createStore(
  pokemonReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={pokeStore}>
        <Home />
      </Provider>
    );
  }
}

export default App;
