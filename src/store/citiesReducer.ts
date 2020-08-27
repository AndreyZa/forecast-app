import { ICitiesStore, initialData } from './ICitiesStore';
import { ADD_CITY, CLEAR_ALL, ICitiesAction } from './actions';

export const citiesReducer = (state = initialData, action: ICitiesAction): ICitiesStore => {
  switch (action.type) {
    case ADD_CITY:
      return {
        cities: {
          ...state.cities,
          [action.payload.name]: action.payload,
        },
      };
    case CLEAR_ALL:
      return {
        cities: {},
      };
    default:
      return state;
  }
};
