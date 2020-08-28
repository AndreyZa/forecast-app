import { Dispatch } from 'redux';
import { ADD_FORECAST, ActionForecast } from './actions';
import { IForecast } from '../../domain/IForecast';
import { Server } from '../../server';

export class ForecastActions {
  public static fetchForecast = (nameCity: string) => async (dispatch: Dispatch): Promise<void> => {
    try {
      const receivedForecast = await Server.getInstance().getForecastForCity(nameCity);

      if (receivedForecast.data.city.name !== '' && receivedForecast.data.list.length !== 0) {
        dispatch(ForecastActions.addForecast(nameCity, receivedForecast.data.list));
      }
    } catch (_) {
      // error here
    }
  };

  public static addForecast(name: string, forecasts: IForecast[]): ActionForecast {
    return {
      type: ADD_FORECAST,
      payload: {
        name,
        forecasts,
      },
    };
  }
}
