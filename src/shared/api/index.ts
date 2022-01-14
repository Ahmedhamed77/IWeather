export * from './base';
export * from './get-city';
export * from './get-next-day-weather';

import {CityEndpoints} from './get-city';

export const endpoints = {
  city: CityEndpoints,
};
