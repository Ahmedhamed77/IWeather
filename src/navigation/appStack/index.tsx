import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppParams, AppParamsList} from './interface';
import {HomeScreen, WeatherDetailsScreen} from '../../screens';

const Stack = createNativeStackNavigator<AppParamsList>();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={AppParams.Home} component={HomeScreen} />
      <Stack.Screen
        name={AppParams.WeatherDetails}
        component={WeatherDetailsScreen}
      />
    </Stack.Navigator>
  );
};
