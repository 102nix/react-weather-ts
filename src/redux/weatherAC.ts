import { WeatherAPI } from '../api/api'
import { InitialStateType, SetWeatherType, ThunkType, weatherReducerConst } from "../types/ACWeatherTypes"

export const setWeather = (objectWeather: InitialStateType): SetWeatherType => ({type: weatherReducerConst.GET_WEATHER, objectWeather})

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