import {axiosInstance} from '../base';
import {GetNextDaysWeatherResponse} from './types';

export const getWeatherOfNextDay = async (cityName: string) => {
  const res = await axiosInstance.get<GetNextDaysWeatherResponse>('', {
    params: {q: cityName},
  });
  return res.data;
};
