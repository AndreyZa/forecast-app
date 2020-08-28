import { ICitiesStore, initialData } from './ICitiesStore';
import { ADD_CITY, CHANGE_INCITY, ICitiesAction } from './actions';

export const citiesReducer = (state = initialData, action: ICitiesAction): ICitiesStore => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.payload.name]: action.payload,
        },
      };
    case CHANGE_INCITY:
      return {
        ...state,
        inCity: !state.inCity,
      };
    default:
      return state;
  }
};
