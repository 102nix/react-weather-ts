import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../redux/store'

export enum weatherReducerConst{
  GET_WEATHER = 'GET_WEATHER',
  GET_WEATHER_RANGE = 'GET_WEATHER_RANGE'
}
export type InitialStateType = {
  cityName: null | string
  countryName: null | string
  temperatureC: null | number
  windSpeedK: null | number
  weatherFirst: null | string
  weatherSecond: null | string
  humidity: null | number
  cityNameRange?: null | string
  weatherRange?: null | Array<RangeDaysWeatherType>
}

export type ActionsType = SetWeatherType | SetWeatherRangeType

export type SetWeatherType = {
  type: weatherReducerConst.GET_WEATHER
  objectWeather: InitialStateType
}

export type SetWeatherRangeType = {
  type: weatherReducerConst.GET_WEATHER_RANGE
  cityNameRange: string
  weatherRange: Array<RangeDaysWeatherType>
}

export type RangeDaysWeatherType = {
  temperatureC: undefined | number
  date: undefined | string
  time: undefined | string
  wind: undefined | number
  weather: undefined | string
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export type ThunkTypeRange = ThunkAction<Promise<void>, AppStateType, unknown, SetWeatherRangeType>


