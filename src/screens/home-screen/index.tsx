import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {Store} from '../../redux';
import {PressableScaleCard, WeatherCard} from '../../shared';
import {AppParams, AppParamsList} from '../../navigation/appStack/interface';
import {getWeatherOfCity} from '../../redux/city-weather/action';
import {styles} from './style';

interface HomeScreenProps {
  navigation: StackNavigationProp<AppParamsList, AppParams.Home>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {cities, loading, error} = useSelector((state: Store) => state.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherOfCity());
  }, [dispatch]);

  const goToWeatherDetails = () =>
    navigation.navigate(AppParams.WeatherDetails);

  if (loading) {
    return <ActivityIndicator style={styles.loading} color={'blue'} />;
  }

  if (!cities || error) {
    return null;
  }

  return (
    <ScrollView>
      {cities.map(city => {
        return (
          <PressableScaleCard
            key={city.id}
            onPress={goToWeatherDetails}
            style={styles.pressableStyle}>
            <WeatherCard
              name={city.name}
              temp={Math.round(city.main.temp)}
              condition={city.weather[0].main}
              temp_min={Math.round(city.main.temp_min)}
              temp_max={Math.round(city.main.temp_max)}
            />
          </PressableScaleCard>
        );
      })}
    </ScrollView>
  );
};
