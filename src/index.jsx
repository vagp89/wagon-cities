// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import CitiesReducer from '../src/reducers/CitiesReducer';
import selectedCityReducer from '../src/reducers/selectedCityReducer';

// State and reducers
const reducers = combineReducers({
  cities: CitiesReducer,
  selectedCity: selectedCityReducer,
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);

