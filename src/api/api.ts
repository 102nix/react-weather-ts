import axios from 'axios';

const API_URL       = 'https://api.openweathermap.org/data/2.5/weather'
const URL2          = 'https://api.openweathermap.org/data/2.5/forecast'
const API_KEY       = '64a1ec43aa887e9c70f0cc28b9ee2b94'
const LOCATION_CODE = '479561';
const LANG          = 'ru'
const FULL_API_URL  = `${API_URL}?id=${LOCATION_CODE}&lang=${LANG}&appid=${API_KEY}`;

export const WeatherAPI = {
  getWeatherapi () {
    return axios.get<Object>(FULL_API_URL)
  },
  getWeatherName (name: string) {
    const LOCATION_Name = name
    const FULL_API_URL  = `${API_URL}?q=${LOCATION_Name}&lang=${LANG}&appid=${API_KEY}`;
    return axios.get<Object>(FULL_API_URL)
  },
  getForecastName (name: string) {
    const LOCATION_Name = name
    const FULL_API_URL  = `${URL2}?q=${LOCATION_Name}&lang=${LANG}&appid=${API_KEY}`;
    return axios.get<Object>(FULL_API_URL)
  },
  getWeatherGeo (lat: number, lon: number) {
    const LAT           = lat
    const LON           = lon
    const FULL_API_URL  = `${API_URL}?lat=${LAT}&lon=${LON}&lang=${LANG}&appid=${API_KEY}`;
    return axios.get<Object>(FULL_API_URL)
  }
}

