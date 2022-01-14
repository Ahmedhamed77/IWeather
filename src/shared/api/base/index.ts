import axiosPackage from 'axios';

const APP_KEY = '915d91ed8153af2f494be484c8effcbd';

export const server = {
  todayWeather: `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APP_KEY}`,
  tomorrowWeather: `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${APP_KEY}`,
};

export const baseURL = server.todayWeather;
export const baseURLInstance = server.tomorrowWeather;

export const axios = axiosPackage.create({
  baseURL,
});

export const axiosInstance = axiosPackage.create({
  baseURL: baseURLInstance,
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    console.log('axios error', error, error.response);
    return Promise.reject(error.response);
  },
);
