import {Dispatch} from 'redux';

import {
  getCairoCity,
  getKrasnodarCity,
  getLondonCity,
  getMoscowCity,
  getNewYorkCity,
} from '../../shared';
import {Action, ActionType} from './types';

export const getWeatherOfCity = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const moscowWeather = await getMoscowCity();
    const cairoWeather = await getCairoCity();
    const newYorkWeather = await getNewYorkCity();
    const londonWeather = await getLondonCity();
    const krasnadorWeather = await getKrasnodarCity();

    const data = [
      moscowWeather,
      cairoWeather,
      newYorkWeather,
      londonWeather,
      krasnadorWeather,
    ];

    dispatch({type: ActionType.GET_CITY, payload: data});
  } catch (error: any) {
    console.log(error, 'error fetching weather ');
  }
};
