import { Dispatch } from 'redux';
import { ADD_CITY, CLEAR_ALL, ICitiesAction } from './actions';
import { ICity } from '../domain/ICity';
import { Server } from '../server';

export class CitiesActions {
  public static fetchCity = (name: string) => async (dispatch: Dispatch): Promise<void> => {
    try {
      const city = await Server.getInstance().getCity(name);
      dispatch(CitiesActions.addCity(city.data));
    } catch (_) {
      // error here
      console.log('Errror', _);
    }
  };

  public static addCity(city: ICity): ICitiesAction {
    return {
      type: ADD_CITY,
      payload: city,
    };
  }

  public static clearAll(): ICitiesAction {
    return {
      type: CLEAR_ALL,
      payload: {},
    };
  }
}
