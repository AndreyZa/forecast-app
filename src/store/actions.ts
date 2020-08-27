import { ICity } from '../domain/ICity';

export const ADD_CITY = 'ADD_CITY';
export const CLEAR_ALL = 'CLEAR_ALL';

export type ActionType = 'ADD_CITY' | 'CLEAR_ALL';

export interface ICitiesAction {
  type: ActionType;
  payload: ICity | Record<string, string | number>;
}
