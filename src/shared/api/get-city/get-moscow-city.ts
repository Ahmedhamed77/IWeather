import {endpoints} from '../index';
import {axios} from '../base';
import {GetCityWeatherResponse} from './types';

export const getMoscowCity = async () => {
  const res = await axios.get<GetCityWeatherResponse>('', {
    params: {q: endpoints.city.moscowCity},
  });
  return res.data;
};
