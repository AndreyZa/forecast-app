import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { ICitiesTodayWeatherStore } from './ICitiesStore';
import { ForecastStore } from './forecast/ForecastStore';
import { citiesReducer } from './citiesReducer';
import { forecastReducer } from './forecast/forecastReducer';

export interface IApplicationStore {
  citiesWeatherToday: ICitiesTodayWeatherStore;
  forecasts: ForecastStore;
}

const rootReducer = combineReducers<{
  citiesWeatherToday: ICitiesTodayWeatherStore;
  forecasts: ForecastStore;
}>({
  citiesWeatherToday: citiesReducer,
  forecasts: forecastReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk), devToolsEnhancer({}))
);
