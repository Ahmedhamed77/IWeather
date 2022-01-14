import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppParams, AppParamsList} from './interface';
import {
  HomeScreen,
  NewWeatherCity,
  NextDaysWeather,
  WeatherDetailsScreen,
} from '../../screens';

const Stack = createNativeStackNavigator<AppParamsList>();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={AppParams.Home} component={HomeScreen} />
      <Stack.Screen
        name={AppParams.WeatherDetails}
        component={WeatherDetailsScreen}
      />
      <Stack.Screen
        name={AppParams.NextDaysWeather}
        component={NextDaysWeather}
      />
      <Stack.Screen
        name={AppParams.NewWeatherCity}
        component={NewWeatherCity}
      />
    </Stack.Navigator>
  );
};
