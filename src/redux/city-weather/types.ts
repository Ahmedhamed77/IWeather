import {GetCityWeatherResponse} from '../../shared';

export enum ActionType {
  GET_CITY = 'GET_CITY',
  ADD_NEW_CITY = 'ADD_NEW_CITY',
  CITY_LOADING = 'CITY_LOADING',
  CITY_ERROR = 'CITY_ERROR',
}

interface GetCity {
  type: ActionType.GET_CITY;
  payload: GetCityWeatherResponse;
}

interface AddNewWeatherCity {
  type: ActionType.ADD_NEW_CITY;
  payload: GetCityWeatherResponse;
}

interface CityLoading {
  type: ActionType.CITY_LOADING;
}

interface CityError {
  type: ActionType.CITY_ERROR;
  payload: string;
}

export type Action = GetCity | AddNewWeatherCity | CityLoading | CityError;
