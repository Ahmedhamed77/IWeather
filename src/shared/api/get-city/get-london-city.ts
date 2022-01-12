import {endpoints} from '../index';
import {axios} from '../base';
import {GetCityWeatherResponse} from './types';

export const getLondonCity = async () => {
  const res = await axios.get<GetCityWeatherResponse>('', {
    params: {q: endpoints.city.london},
  });
  return res.data;
};
