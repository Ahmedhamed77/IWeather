import {combineReducers} from 'redux';
import {cityReducer} from './city-weather/reducer';
import {searchWeatherReducer} from './search-city-weather/reducer';
import {nextDayCityWeather} from './weather-next-day/reducer';

const rootReducer = combineReducers({
  cities: cityReducer,
  nextDayWeather: nextDayCityWeather,
  searchedCity: searchWeatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
