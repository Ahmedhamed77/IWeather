import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {Store} from '../../redux';
import {
  resetSearch,
  searchNewWeatherCity,
} from '../../redux/search-city-weather/action';
import {addNewWeatherCity} from '../../redux/city-weather/action';
import {PressableScaleCard} from '../../shared';
import {SearchedCard} from './search-card';
import {styles} from './style';

interface NewWeatherCityProps {}

export const NewWeatherCity: React.FC<NewWeatherCityProps> = () => {
  const [cityValue, setCityValue] = useState('');

  const {searchedCity, loading, error} = useSelector(
    (state: Store) => state.searchedCity,
  );

  const {cities} = useSelector((state: Store) => state.cities);

  const dispatch = useDispatch();

  const isExist =
    searchedCity && cities.some(city => city.id === searchedCity.id);

  const onCityAdd = () => {
    searchedCity && dispatch(addNewWeatherCity(searchedCity));
  };

  const onSearch = () => {
    dispatch(searchNewWeatherCity(cityValue));
  };

  useEffect(() => {
    cityValue.length === 0 && dispatch(resetSearch());
  }, [dispatch, cityValue]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={cityValue}
          placeholder={'Enter the city you want to add .....'}
          style={styles.textInputStyle}
          onChangeText={setCityValue}
        />
        <PressableScaleCard onPress={onSearch}>
          <Ionicons size={24} name={'search'} color="#000" />
        </PressableScaleCard>
      </View>
      {searchedCity && (
        <SearchedCard
          searchedCity={searchedCity}
          loading={loading}
          hasError={Boolean(error)}
          isCityExist={isExist}
          onAddCity={onCityAdd}
        />
      )}
    </View>
  );
};
