import { ICity } from '../domain/ICity';

export const ADD_CITY = 'ADD_CITY';

export type ActionType = 'ADD_CITY';

type AddPayload = {
  name: string;
  city: ICity;
};

export interface ICitiesAction {
  type: ActionType;
  payload: AddPayload | Record<string, string | number>;
}
