import { Dispatch } from 'redux';
import { ADD_CITY, CHANGE_INCITY, ICitiesAction } from './actions';
import { ICity } from '../domain/ICity';
import { Server } from '../server';

export class CitiesActions {
  public static fetchCity = (name: string) => async (dispatch: Dispatch): Promise<void> => {
    try {
      const city = await Server.getInstance().getCity(name);
      if (city.data) {
        dispatch(CitiesActions.addCity(city.data));
      }
    } catch (_) {
      // error here
    }
  };

  public static addCity(city: ICity): ICitiesAction {
    return {
      type: ADD_CITY,
      payload: city,
    };
  }

  public static changeInCity(): ICitiesAction {
    return {
      type: CHANGE_INCITY,
      payload: {},
    };
  }
}
