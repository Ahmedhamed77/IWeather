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
    dispatch({type: ActionType.CITY_ERROR, payload: error});
  }
};

export const getCairoWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const cairoWeather = await getCairoCity();

    dispatch({type: ActionType.GET_CITY, payload: cairoWeather});
  } catch (error: any) {
    dispatch({type: ActionType.CITY_ERROR, payload: error});
  }
};

export const getNewYorkWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const newYorkWeather = await getNewYorkCity();

    dispatch({type: ActionType.GET_CITY, payload: newYorkWeather});
  } catch (error: any) {
    dispatch({type: ActionType.CITY_ERROR, payload: error});
  }
};

export const getLondonWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const londonWeather = await getLondonCity();

    dispatch({type: ActionType.GET_CITY, payload: londonWeather});
  } catch (error: any) {
    dispatch({type: ActionType.CITY_ERROR, payload: error});
  }
};

export const getKrasnodarWeather = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.CITY_LOADING});
  try {
    const krasnodarWeather = await getKrasnodarCity();

    dispatch({type: ActionType.GET_CITY, payload: krasnodarWeather});
  } catch (error: any) {
    dispatch({type: ActionType.CITY_ERROR, payload: error});
  }
};

export const addNewWeatherCity =
  (city: GetCityWeatherResponse) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.ADD_NEW_CITY, payload: city});
  };
