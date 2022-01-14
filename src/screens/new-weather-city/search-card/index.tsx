import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';
import {
  COLORS,
  GetCityWeatherResponse,
  Loader,
  PressableScaleCard,
  WeatherCard,
} from '../../../shared';

interface SearchedCardProps {
  searchedCity: GetCityWeatherResponse;
  isCityExist: boolean | null;
  onAddCity(): void;
  loading?: boolean;
  hasError?: boolean;
}

export const SearchedCard: React.FC<SearchedCardProps> = ({
  searchedCity,
  loading,
  hasError,
  onAddCity,
  isCityExist,
}) => {
  if (loading) {
    return <Loader color={COLORS.aqua} />;
  }

  if (hasError) {
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>
        Ops, the city you are looking for is not exist
      </Text>
    </View>;
  }
  return (
    <View style={styles.contentContainer}>
      <WeatherCard
        name={searchedCity.name}
        styleCard={styles.cardStyle}
        temp={Math.round(searchedCity.main.temp)}
        condition={searchedCity.weather[0].main}
        temp_min={Math.round(searchedCity.main.temp_min)}
        temp_max={Math.round(searchedCity.main.temp_max)}
      />
      <PressableScaleCard onPress={onAddCity} disabled={isCityExist}>
        <View style={[styles.pressableView, isCityExist && styles.cityExist]}>
          {!isCityExist ? (
            <Text style={styles.pressableText}>Add city to the list</Text>
          ) : (
            <Text style={styles.pressableText}>
              City Already exit in the list
            </Text>
          )}
        </View>
      </PressableScaleCard>
    </View>
  );
};
