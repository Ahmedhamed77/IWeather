import {GetCityWeatherResponse} from '../../shared';
import {Action, ActionType} from './types';

interface SearchWeatherReducer {
  searchedCity: GetCityWeatherResponse | null;
  loading: boolean;
  error: string | null;
}
const initialState = {
  searchedCity: null,
  loading: false,
  error: null,
};

export const searchWeatherReducer = (
  state: SearchWeatherReducer = initialState,
  action: Action,
): SearchWeatherReducer => {
  switch (action.type) {
    case ActionType.SEARCH_CITY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SEARCH_WEATHER_CITY:
      return {
        searchedCity: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.RESET_SEARCH:
      return {
        searchedCity: null,
        loading: false,
        error: null,
      };
    case ActionType.SEARCH_CITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
