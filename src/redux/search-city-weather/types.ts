import {GetCityWeatherResponse} from '../../shared';

export enum ActionType {
  SEARCH_WEATHER_CITY = 'SEARCH_WEATHER_CITY',
  RESET_SEARCH = 'RESET_SEARCH',
  SEARCH_CITY_LOADING = 'SEARCH_CITY_LOADING',
  SEARCH_CITY_ERROR = 'SEARCH_CITY_ERROR',
}

interface GetSearchResult {
  type: ActionType.SEARCH_WEATHER_CITY;
  payload: GetCityWeatherResponse;
}

interface SearchCityWeatherLoading {
  type: ActionType.SEARCH_CITY_LOADING;
}

interface ResetSearch {
  type: ActionType.RESET_SEARCH;
}
interface SearchWeatherError {
  type: ActionType.SEARCH_CITY_ERROR;
  payload: string;
}

export type Action =
  | GetSearchResult
  | ResetSearch
  | SearchCityWeatherLoading
  | SearchWeatherError;
