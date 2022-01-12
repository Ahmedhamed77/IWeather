export type GetCityWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: SysWeather;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type SysWeather = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};
