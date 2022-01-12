import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AppParams {
  Home = 'Home',
  WeatherDetails = 'WeatherDetails',
}

export type AppParamsList = {
  [AppParams.Home]: NO_PARAMS;
  [AppParams.WeatherDetails]: NO_PARAMS;
};
export type AppNavigation = StackNavigationProp<AppParamsList, AppParams>;
