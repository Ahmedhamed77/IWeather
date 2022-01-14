import React, {useEffect} from 'react';

import {styles} from './style';
import {FlatList, ListRenderItem} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNextDayWeather} from '../../redux/weather-next-day/action';
import {Store} from '../../redux';
import {
  COLORS,
  formatDate,
  GetCityWeatherResponse,
  Loader,
  WeatherCard,
} from '../../shared';
import {RouteProp} from '@react-navigation/native';
import {AppParams, AppParamsList} from '../../navigation/appStack/interface';

interface NextDaysWeatherProps {
  route: RouteProp<AppParamsList, AppParams.NextDaysWeather>;
}

export const NextDaysWeather: React.FC<NextDaysWeatherProps> = ({route}) => {
  const {name} = route.params;
  const {nextDayCityWeather, loading, error} = useSelector(
    (state: Store) => state.nextDayWeather,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNextDayWeather(name));
  }, [dispatch, name]);

  if (loading) {
    return <Loader color={COLORS.aqua} />;
  }
  if (!nextDayCityWeather || !nextDayCityWeather.list || error) {
    return null;
  }

  const renderItem: ListRenderItem<GetCityWeatherResponse> = ({item}) => {
    const date = formatDate(item.dt);
    return (
      <WeatherCard
        key={item.id}
        styleCard={styles.cardStyle}
        name={name}
        date={date}
        temp={Math.round(item.main.temp)}
        condition={item.weather[0].main}
        temp_min={Math.round(item.main.temp_min)}
        temp_max={Math.round(item.main.temp_max)}
      />
    );
  };

  return (
    <FlatList
      data={nextDayCityWeather.list}
      keyExtractor={(item, index) => `${item.id}${index}`}
      renderItem={renderItem}
    />
  );
};
