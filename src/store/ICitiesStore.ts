import { ICity } from '../domain/ICity';

export type Cities = {
  [key in string]: ICity;
};

export interface ICitiesTodayWeatherStore {
  cities: Cities;
}

export const initialData = {
  cities: {},
};
