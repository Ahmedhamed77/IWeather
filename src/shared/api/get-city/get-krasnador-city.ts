import {endpoints} from '../index';
import {axios} from '../base';
import {GetCityWeatherResponse} from './types';

export const getKrasnodarCity = async () => {
  const res = await axios.get<GetCityWeatherResponse>('', {
    params: {q: endpoints.city.krasnodar},
  });
  return res.data;
};
