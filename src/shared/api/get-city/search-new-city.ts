import {GetCityWeatherResponse} from './types';
import {axios} from '../base';

export const searchNewCity = async (query: string) => {
  const res = await axios.get<GetCityWeatherResponse>('', {params: {q: query}});
  return res.data;
};
