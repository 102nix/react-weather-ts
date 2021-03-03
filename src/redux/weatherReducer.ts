import { WeatherAPI } from '../api/api';
import { ActionsType, SetWeatherType, ThunkType } from '../types/ACTypes';
import { InitialStateType } from '../types/componentsTypes';
import { setWeather } from './weatherAC';

export const GET_WEATHER = 'GET_WEATHER'

let initialState: InitialStateType = {
  cityName: null,
  countryName: null,
  temperatureC: null,
  windSpeedK: null,
  weatherFirst: null,
  weatherSecond: null,
  humidity: null
}

const weatherReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        cityName: action.objectWeather.cityName,
        countryName: action.objectWeather.countryName,
        temperatureC: action.objectWeather.temperatureC,
        windSpeedK: action.objectWeather.windSpeedK,
        weatherFirst: action.objectWeather.weatherFirst,
        weatherSecond: action.objectWeather.weatherSecond,
        humidity: action.objectWeather.humidity
      }
    default: return state
  }
}

function prepareDataForDispatch (response: any) {
  const objectWeather: InitialStateType = {
    cityName: response.data.name,
    countryName: response.data.sys.country,
    temperatureC: Math.ceil(response.data.main.temp - 273.15),
    windSpeedK: response.data.wind.speed,
    weatherFirst: response.data.weather[0].description,
    weatherSecond: response.data.weather[1] === undefined ? '' : response.data.weather[1].description,
    humidity: response.data.main.humidity
  }
  return objectWeather
}

export const onGetWeather = (): ThunkType => async (dispatch) => {
  try {
    const response = await WeatherAPI.getWeatherapi()
    dispatch(setWeather(prepareDataForDispatch(response)))
  } catch (error) {
    console.log(error)
  }
}

export const onGetWeatherName = (name: string): ThunkType => async (dispatch) => {
  try {
    const response = await WeatherAPI.getWeatherName(name)
    dispatch(setWeather(prepareDataForDispatch(response)))
  } catch (error) {
    console.log(error)
  }
}

export const onGetWeatherGeo = (lat: number, lon: number): ThunkType => async (dispatch) => {
  try {
    const response = await WeatherAPI.getWeatherGeo(lat, lon)
    dispatch(setWeather(prepareDataForDispatch(response)))
  } catch (error) {
    console.log(error)
  }
}

export default weatherReducer
