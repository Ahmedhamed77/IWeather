import React from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';

import {styles} from './style';

interface LoaderProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({style, color}) => {
  return <ActivityIndicator style={[styles.container, style]} color={color} />;
};
