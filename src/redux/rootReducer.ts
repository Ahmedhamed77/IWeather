import {combineReducers} from 'redux';
import {cityReducer} from './city-weather/reducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {searchWeatherReducer} from './search-city-weather/reducer';
import {nextDayCityWeather} from './weather-next-day/reducer';
import {Store} from './types';

const rootReducer = combineReducers({
  cities: cityReducer,
  nextDayWeather: nextDayCityWeather,
  searchedCity: searchWeatherReducer,
});

const persistConfig = {
  key: 'Root',
  storage: AsyncStorage,
  whiteList: ['cities'],
  blacklist: ['nextDayWeather', 'searchedCity'],
};

export const persistAppReducer = persistReducer<Store, any>(
  persistConfig,
  rootReducer,
);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
