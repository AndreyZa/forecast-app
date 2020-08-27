import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { citiesReducer } from './citiesReducer';

export const store = createStore(
  citiesReducer,
  compose(applyMiddleware(ReduxThunk), devToolsEnhancer({}))
);
