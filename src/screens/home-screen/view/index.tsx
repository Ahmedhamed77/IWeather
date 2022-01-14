import React from 'react';

import {FlatList, ListRenderItem} from 'react-native';
import {
  GetCityWeatherResponse,
  PressableScaleCard,
  WeatherCard,
} from '../../../shared';
import {styles} from './style';

interface HomeScreenViewProps {
  cities: GetCityWeatherResponse[];
  onCityPress(city: GetCityWeatherResponse): void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  cities,
  onCityPress,
}) => {
  const renderItem: ListRenderItem<GetCityWeatherResponse> = ({item}) => {
    const onPress = () => onCityPress(item);
    return (
      <PressableScaleCard
        key={item.id}
        onPress={onPress}
        style={styles.pressableStyle}>
        <WeatherCard
          name={item.name}
          temp={Math.round(item.main.temp)}
          condition={item.weather[0].main}
          temp_min={Math.round(item.main.temp_min)}
          temp_max={Math.round(item.main.temp_max)}
        />
      </PressableScaleCard>
    );
  };

  return (
    <FlatList
      data={cities}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderItem}
    />
  );
};
