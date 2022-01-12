import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#f6f6f6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },

  temp: {
    fontSize: 46,
    color: 'white',
    marginTop: 10,
    fontWeight: '400',
  },
  topContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 32,
    marginBottom: 20,
  },
  halfContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 24,
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
    textAlign: 'left',
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 7,
  },
  tempDif: {
    flexDirection: 'row',
    color: 'white',
    marginBottom: 22,
  },
  tempDifText: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
