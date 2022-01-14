import {GetNextDaysWeatherResponse} from '../../shared';

export enum ActionType {
  GET_NEXT_DAY_WEATHER = 'GET_NEXT_DAY_WEATHER',
  NEXT_DAY_WEATHER_IS_LOADING = 'NEXT_DAY_WEATHER_IS_LOADING',
  NEXT_DAY_WEATHER_ERROR = 'NEXT_DAY_WEATHER_ERROR',
}

interface GetNextDayWeather {
  type: ActionType.GET_NEXT_DAY_WEATHER;
  payload: GetNextDaysWeatherResponse;
}

interface NextDayWeatherLoading {
  type: ActionType.NEXT_DAY_WEATHER_IS_LOADING;
}

interface NextDayWeatherError {
  type: ActionType.NEXT_DAY_WEATHER_ERROR;
  payload: string;
}

export type Action =
  | GetNextDayWeather
  | NextDayWeatherLoading
  | NextDayWeatherError;
