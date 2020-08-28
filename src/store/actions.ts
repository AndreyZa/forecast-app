import { ICity } from '../domain/ICity';

export const ADD_CITY = 'ADD_CITY';
export const CHANGE_INCITY = 'CHANGE_INCITY';

export type ActionType = 'ADD_CITY' | 'CHANGE_INCITY';

export interface ICitiesAction {
  type: ActionType;
  payload: ICity | Record<string, string | number>;
}
