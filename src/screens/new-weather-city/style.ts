import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 25,
  },
  textInputStyle: {
    paddingRight: 12,
  },
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
    backgroundColor: COLORS.grey,
  },
  pressableView: {
    backgroundColor: '#FFBD57',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  pressableText: {
    color: '#fff',
  },
});
