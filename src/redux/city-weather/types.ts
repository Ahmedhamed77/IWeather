import {GetCityWeatherResponse} from '../../shared';

export enum ActionType {
  GET_CITY = 'GET_CITY',
  CITY_LOADING = 'CITY_LOADING',
  CITY_ERROR = 'CITY_ERROR',
}

interface GetCity {
  type: ActionType.GET_CITY;
  payload: GetCityWeatherResponse[];
}

interface CityLoading {
  type: ActionType.CITY_LOADING;
}

interface CityError {
  type: ActionType.CITY_ERROR;
  payload: string;
}

export type Action = GetCity | CityLoading | CityError;
