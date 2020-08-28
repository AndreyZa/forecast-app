import { ForecastStore, forecastInitialData } from './ForecastStore';
import { ActionForecast, ADD_FORECAST } from './actions';

export const forecastReducer = (
  state = forecastInitialData,
  action: ActionForecast
): ForecastStore => {
  switch (action.type) {
    case ADD_FORECAST:
      return {
        ...state,
        [action.payload.name]: [...action.payload.forecasts],
      };
    default:
      return state;
  }
};
