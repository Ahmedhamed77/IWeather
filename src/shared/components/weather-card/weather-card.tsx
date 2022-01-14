import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {weatherOptions} from './weather-options';
import {styles} from './style';

interface WeatherCardProps {
  name: string;
  temp: number;
  condition: string;
  temp_min: number;
  temp_max: number;
  date?: string;
  styleCard?: StyleProp<ViewStyle>;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  name,
  temp,
  condition,
  temp_max,
  temp_min,
  date,
  styleCard,
}) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient || []}
      style={[styles.container, styleCard]}>
      <View style={styles.topContainer}>
        <Ionicons size={20} name={'map'} color="white" />
        <Text style={styles.locationText}>{name}</Text>
      </View>
      <View style={styles.dateContainer}>
        {date && <Text style={styles.locationText}>{date}</Text>}
      </View>

      <View style={styles.halfContainer}>
        <Ionicons
          size={96}
          name={weatherOptions[condition]?.iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
        <View style={styles.tempDif}>
          <Text style={styles.tempDifText}>H:{temp_max}°</Text>
          <Text style={styles.tempDifText}>L:{temp_min}°</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
