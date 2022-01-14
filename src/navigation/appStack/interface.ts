import {StackNavigationProp} from '@react-navigation/stack';
import {GetCityWeatherResponse} from '../../shared';

export type NO_PARAMS = undefined;

export enum AppParams {
  Home = 'Home',
  WeatherDetails = 'WeatherDetails',
  NextDaysWeather = 'NextDaysWeather',
  NewWeatherCity = 'NewWeatherCity',
}

export type AppParamsList = {
  [AppParams.Home]: NO_PARAMS;
  [AppParams.WeatherDetails]: {item: GetCityWeatherResponse};
  [AppParams.NextDaysWeather]: {id: number; name: string};
  [AppParams.NewWeatherCity]: NO_PARAMS;
};
export type AppNavigation = StackNavigationProp<AppParamsList, AppParams>;
