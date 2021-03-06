import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../redux/store'
import { forecast5Const, RangeDaysWeatherType } from './ACforecast5types'

export enum weatherReducerConst{
  GET_WEATHER = 'GET_WEATHER'
}
export type InitialStateType = {
  cityName: null | string
  countryName: null | string
  temperatureC: null | number
  windSpeedK: null | number
  weatherFirst: null | string
  weatherSecond: null | string
  humidity: null | number
}

export type ActionsType = SetWeatherType 

export type SetWeatherType = {
  type: weatherReducerConst.GET_WEATHER
  objectWeather: InitialStateType
}

export type SetWeatherRangeType = {
  type: forecast5Const.GET_WEATHER_RANGE
  city: string
  weatherRange: Array<RangeDaysWeatherType>
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export type ThunkTypeRange = ThunkAction<Promise<void>, AppStateType, unknown, SetWeatherRangeType>


