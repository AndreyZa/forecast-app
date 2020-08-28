import { ICity } from '../domain/ICity';

export type Cities = {
  [key in string]: ICity;
};

export interface ICitiesStore {
  cities: Cities;
  inCity: boolean;
}

export const initialData = {
  cities: {},
  inCity: false,
};
