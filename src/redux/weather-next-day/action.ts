import {Dispatch} from 'redux';

import {getWeatherOfNextDay} from '../../shared';
import {Action, ActionType} from './types';

export const getNextDayWeather =
  (query: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.NEXT_DAY_WEATHER_IS_LOADING});
    try {
      const nextDayWeather = await getWeatherOfNextDay(query);

      dispatch({
        type: ActionType.GET_NEXT_DAY_WEATHER,
        payload: nextDayWeather,
      });
    } catch (error: any) {
      console.log(error, 'error fetching weather ');
    }
  };
