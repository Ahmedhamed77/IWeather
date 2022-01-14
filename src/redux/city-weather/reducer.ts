import {GetCityWeatherResponse} from '../../shared';
import {Action, ActionType} from './types';

interface CityReducer {
  cities: GetCityWeatherResponse[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  cities: [],
  loading: false,
  error: null,
};

export const cityReducer = (
  state: CityReducer = initialState,
  action: Action,
): CityReducer => {
  switch (action.type) {
    case ActionType.CITY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_CITY:
      return {
        cities: [...state.cities, action.payload],
        loading: false,
        error: null,
      };
    case ActionType.ADD_NEW_CITY:
      return {
        cities: [...state.cities, action.payload],
        loading: false,
        error: null,
      };
    case ActionType.CITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
