import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {Store} from '../../redux';
import {
  COLORS,
  GetCityWeatherResponse,
  Loader,
  PressableScaleCard,
} from '../../shared';
import {AppParams, AppParamsList} from '../../navigation/appStack/interface';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getCairoWeather,
  getKrasnodarWeather,
  getLondonWeather,
  getMoscowWeather,
  getNewYorkWeather,
} from '../../redux/city-weather/action';
import {HomeScreenView} from './view';

interface HomeScreenProps {
  navigation: StackNavigationProp<AppParamsList, AppParams.Home>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {cities, loading, error} = useSelector((state: Store) => state.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getMoscowWeather());
      dispatch(getCairoWeather());
      dispatch(getNewYorkWeather());
      dispatch(getLondonWeather());
      dispatch(getKrasnodarWeather());
    }
  }, [dispatch, cities.length]);

  const goToWeatherDetails = (item: GetCityWeatherResponse) =>
    navigation.navigate(AppParams.WeatherDetails, {item});

  const goToAddNewCity = () => navigation.navigate(AppParams.NewWeatherCity);

  if (loading) {
    return <Loader color={COLORS.aqua} />;
  }

  if (!cities) {
    return null;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Something went wrong</Text>
      </View>
    );
  }

  return (
    <>
      <HomeScreenView cities={cities} onCityPress={goToWeatherDetails} />
      <PressableScaleCard
        style={styles.pressableIconContainer}
        onPress={goToAddNewCity}>
        <View style={styles.iconContainer}>
          <Ionicons size={24} name={'add-outline'} color={COLORS.black} />
        </View>
      </PressableScaleCard>
    </>
  );
};
