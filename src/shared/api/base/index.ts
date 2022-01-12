import axiosPackage from 'axios';

const APP_KEY = 'd7b00e3b1c8cc224e73f52f2cf64a792';

export const server = {
  live: `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APP_KEY}`,
};

export const baseURL = server.live;

export const axios = axiosPackage.create({
  baseURL,
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
