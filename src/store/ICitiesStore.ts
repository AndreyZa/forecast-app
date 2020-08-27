import { ICity } from '../domain/ICity';

export interface ICitiesStore {
  cities: {
    [key in string]: ICity;
  };
}

export const initialData = {
  cities: {},
};
