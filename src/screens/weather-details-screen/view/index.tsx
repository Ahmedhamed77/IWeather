import React from 'react';

import {styles} from './style';
import {ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, GetCityWeatherResponse, weatherOptions} from '../../../shared';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface WeatherDetailsScreenViewProps {
  date: string;
  condition: string;
  WeatherDetails: GetCityWeatherResponse;
}

export const WeatherDetailsScreenView: React.FC<
  WeatherDetailsScreenViewProps
> = ({date, condition, WeatherDetails}) => {
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <LinearGradient
        colors={weatherOptions[condition]?.gradient || []}
        style={styles.contentGradient}>
        <Text style={styles.dateStyle}>{date}</Text>
        <Text style={styles.cityName}>{WeatherDetails.name}</Text>

        <View style={styles.rowItem}>
          <Text style={styles.tempStyle}>{WeatherDetails.main.temp}</Text>
          <Ionicons size={22} name="egg-outline" color={COLORS.white} />
        </View>

        <Ionicons
          size={100}
          name={weatherOptions[condition]?.iconName}
          color="white"
        />

        <Text style={styles.weatherMainStyle}>
          {WeatherDetails.weather[0].main}
        </Text>

        <View style={styles.feelsLikeContainer}>
          <Text style={styles.feelsLikeText}>Feels Like</Text>
          <Text style={styles.feelsLikeTemp}>
            {WeatherDetails.main.feels_like}
          </Text>
        </View>
        <View style={styles.windContainer}>
          <Text style={styles.windText}>wind</Text>
          <Text style={styles.windGust}>{WeatherDetails.wind.gust}</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};
