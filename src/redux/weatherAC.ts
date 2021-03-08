import { WeatherAPI } from '../api/api'
import { InitialStateType, RangeDaysWeatherType, SetWeatherRangeType, SetWeatherType, ThunkType, ThunkTypeRange, weatherReducerConst } from "../types/ACWeatherTypes"
import { getDatesFromFiveDays } from './getDatesFromFiveDays'

export const setWeather = (objectWeather: InitialStateType): SetWeatherType => ({type: weatherReducerConst.GET_WEATHER, objectWeather})
export const setWeatherRange = 
  (cityNameRange: string, weatherRange: Array<RangeDaysWeatherType>): 
    SetWeatherRangeType => ({type: weatherReducerConst.GET_WEATHER_RANGE, cityNameRange, weatherRange})
    
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

export const onGetForecastName = (name: string): ThunkTypeRange => async (dispatch) => {
  try {
    const response = await WeatherAPI.getForecastName(name)
    console.log(response.data)
    dispatch(setWeatherRange(name, getDatesFromFiveDays(response.data.list)))
  } catch (error) {
    console.log(error)
  }
}

export const onGetHoursWeather = (name:string): ThunkTypeRange => async (dispatch) => {
  try {
    const response = await WeatherAPI.getHorsWeather(name)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}