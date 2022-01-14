import {Dispatch} from 'redux';

import {searchNewCity} from '../../shared';
import {Action, ActionType} from './types';

export const searchNewWeatherCity =
  (query: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.SEARCH_CITY_LOADING});
    try {
      const data = await searchNewCity(query);

      dispatch({type: ActionType.SEARCH_WEATHER_CITY, payload: data});
    } catch (error: any) {
      dispatch({type: ActionType.SEARCH_CITY_ERROR, payload: error});
    }
  };

export const resetSearch = () => (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.RESET_SEARCH});
};
