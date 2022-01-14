import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentGradient: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center',
  },
  dateStyle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    color: COLORS.white,
    marginBottom: 24,
  },
  cityName: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '700',
    marginBottom: 32,
    color: COLORS.astronautBlue,
  },
  rowItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tempStyle: {
    fontSize: 40,
    fontWeight: '400',
    color: COLORS.white,
    paddingHorizontal: 12,
  },
  weatherMainStyle: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '700',
    marginBottom: 32,
    color: COLORS.white,
  },
  feelsLikeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feelsLikeText: {
    paddingHorizontal: 12,
    fontSize: 28,
    lineHeight: 32,
    color: COLORS.white,
  },
  feelsLikeTemp: {
    paddingHorizontal: 12,
    fontSize: 18,
    lineHeight: 32,
    color: COLORS.white,
  },
  windContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  windText: {
    paddingHorizontal: 12,
    fontSize: 28,
    lineHeight: 32,
    color: COLORS.white,
  },
  windGust: {
    paddingHorizontal: 12,
    fontSize: 18,
    lineHeight: 32,
    color: COLORS.white,
  },
});
