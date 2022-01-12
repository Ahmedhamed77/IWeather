import {combineReducers} from 'redux';
import {cityReducer} from './city-weather/reducer';

const rootReducer = combineReducers({
  cities: cityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
