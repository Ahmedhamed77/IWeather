import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';

interface WeatherDetailsScreenProps {}

export const WeatherDetailsScreen: React.FC<WeatherDetailsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>WeatherDetailsScreen</Text>
    </View>
  );
};
