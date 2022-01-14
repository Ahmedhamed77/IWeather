import {Dispatch} from 'redux';

import {
  getCairoCity,
  GetCityWeatherResponse,
  getKrasnodarCity,
  getLondonCity,
  getMoscowCity,
  getNewYorkCity,
} from '../../shared';
import {Action, ActionType} from './types';

export const getMoscowWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const moscowWeather = await getMoscowCity();

    dispatch({type: ActionType.GET_CITY, payload: moscowWeather});
  } catch (error: any) {
    console.log(error, 'error fetching weather ');
  }
};

export const getCairoWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const cairoWeather = await getCairoCity();

    dispatch({type: ActionType.GET_CITY, payload: cairoWeather});
  } catch (error: any) {
    console.log(error, 'error fetching weather ');
  }
};

export const getNewYorkWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const newYorkWeather = await getNewYorkCity();

    dispatch({type: ActionType.GET_CITY, payload: newYorkWeather});
  } catch (error: any) {
    console.log(error, 'error fetching weather ');
  }
};

export const getLondonWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const londonWeather = await getLondonCity();

    dispatch({type: ActionType.GET_CITY, payload: londonWeather});
  } catch (error: any) {
    console.log(error, 'error fetching weather ');
  }
};

export const getKrasnodarWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const krasnodarWeather = await getKrasnodarCity();

    dispatch({type: ActionType.GET_CITY, payload: krasnodarWeather});
  } catch (error: any) {
    console.log(error, 'error fetching weather ');
  }
};

export const addNewWeatherCity =
  (city: GetCityWeatherResponse) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.ADD_NEW_CITY, payload: city});
  };
