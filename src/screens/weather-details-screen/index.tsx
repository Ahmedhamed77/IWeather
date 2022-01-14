import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {PressableScaleCard} from '../../shared';
import {AppParams, AppParamsList} from '../../navigation/appStack/interface';
import {styles} from './style';
import {WeatherDetailsScreenView} from './view';

interface WeatherDetailsScreenProps {
  navigation: StackNavigationProp<AppParamsList, AppParams.WeatherDetails>;
  route: RouteProp<AppParamsList, AppParams.WeatherDetails>;
}

export const WeatherDetailsScreen: React.FC<WeatherDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const {item} = route.params;

  const date = new Date(item.dt * 1000).toLocaleDateString('en-US');
  const condition = item.weather[0].main;

  const onShowWeatherOfNextDay = () => {
    navigation.navigate(AppParams.NextDaysWeather, {
      id: item.id,
      name: item.name,
    });
  };

  return (
    <>
      <WeatherDetailsScreenView
        date={date}
        condition={condition}
        WeatherDetails={item}
      />
      <PressableScaleCard
        onPress={onShowWeatherOfNextDay}
        style={styles.pressableCardStyle}>
        <View style={styles.pressableView}>
          <Text style={styles.pressableText}>ShowNextDays</Text>
        </View>
      </PressableScaleCard>
    </>
  );
};
