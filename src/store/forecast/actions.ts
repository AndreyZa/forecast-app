import { IForecast } from '../../domain/IForecast';

export const ADD_FORECAST = 'ADD_FORECAST';

export type ActionForecast = {
  type: string;
  payload: {
    name: string;
    forecasts: IForecast[];
  };
};
