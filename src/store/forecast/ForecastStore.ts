import { IForecast } from '../../domain/IForecast';

export type ForecastStore = {
  [key in string]: IForecast[];
};

export const forecastInitialData = {};
