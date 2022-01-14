import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared';

export const styles = StyleSheet.create({
  container: {},
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  cardStyle: {
    marginBottom: 16,
  },
  cityExist: {
    backgroundColor: COLORS.lightGrey,
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
