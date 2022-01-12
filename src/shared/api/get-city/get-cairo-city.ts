import {endpoints} from '../index';
import {axios} from '../base';
import {GetCityWeatherResponse} from './types';

export const getCairoCity = async () => {
  const res = await axios.get<GetCityWeatherResponse>('', {
    params: {q: endpoints.city.cairoCity},
  });
  return res.data;
};
