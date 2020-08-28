import { IForecast } from '../../domain/IForecast';

export const ADD_FORECAST = 'ADD_FORECAST';

export type ActionForecast = {
  type: 'ADD_FORECAST';
  payload: {
    name: string;
    forecasts: IForecast[];
  };
};
