import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../shared';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  pressableCardStyle: {
    width: width,
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  pressableView: {
    backgroundColor: COLORS.lightOrange,
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  pressableText: {
    color: COLORS.white,
  },
});
