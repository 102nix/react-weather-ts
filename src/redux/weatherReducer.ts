import { ActionsType, InitialStateType, weatherReducerConst } from '../types/ACWeatherTypes'

let initialState: InitialStateType = {
  cityName: null,
  countryName: null,
  temperatureC: null,
  windSpeedK: null,
  weatherFirst: null,
  weatherSecond: null,
  humidity: null,
  cityNameRange: null,
  weatherRange: null
}

const weatherReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case weatherReducerConst.GET_WEATHER:
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
    case weatherReducerConst.GET_WEATHER_RANGE:
      return {
        ...state,
        cityNameRange: action.cityNameRange,
        weatherRange: action.weatherRange
      }
    default: return state
  }
}

export default weatherReducer
