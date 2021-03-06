export enum forecast5Const {
  GET_WEATHER_RANGE = 'GET_WEATHER_RANGE'
}

export type RangeDaysWeatherType = {
  temperatureC: undefined | number
  date: undefined | string
  time: undefined | string
  wind: undefined | number
  weather: undefined | string
}

export type InitialStateTypeRange = {
  cityNameRange: null | string
  weatherRange: null | Array<RangeDaysWeatherType>
}