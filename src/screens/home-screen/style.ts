import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 24,
    color: COLORS.violetRed,
  },
  pressableStyle: {
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  pressableIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.smoke,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
