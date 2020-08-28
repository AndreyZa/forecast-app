import { ICitiesTodayWeatherStore, initialData } from './ICitiesStore';
import { ADD_CITY, ICitiesAction } from './actions';

export const citiesReducer = (
  state = initialData,
  action: ICitiesAction
): ICitiesTodayWeatherStore => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.payload.name]: action.payload.city,
        },
      };
    default:
      return state;
  }
};
