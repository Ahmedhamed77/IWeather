import {endpoints} from '../index';
import {axios} from '../base';
import {GetCityWeatherResponse} from './types';

export const getNewYorkCity = async () => {
  const res = await axios.get<GetCityWeatherResponse>('', {
    params: {q: endpoints.city.newYork},
  });
  return res.data;
};
