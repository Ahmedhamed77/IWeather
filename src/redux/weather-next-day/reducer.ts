import {GetNextDaysWeatherResponse} from '../../shared';
import {Action, ActionType} from './types';

interface nextDayWeatherReducer {
  nextDayCityWeather: GetNextDaysWeatherResponse;
  loading: boolean;
  error: string | null;
}
const initialState = {
  nextDayCityWeather: {
    coord: {
      lat: 0,
      lon: 0,
    },
    country: '',
    id: 0,
    name: '',
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,

    cnt: 0,
    cod: '',
    list: [],
  },

  loading: false,
  error: null,
};

export const nextDayCityWeather = (
  state: nextDayWeatherReducer = initialState,
  action: Action,
): nextDayWeatherReducer => {
  switch (action.type) {
    case ActionType.NEXT_DAY_WEATHER_IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_NEXT_DAY_WEATHER:
      return {
        loading: false,
        nextDayCityWeather: action.payload,
        error: null,
      };
    case ActionType.NEXT_DAY_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
