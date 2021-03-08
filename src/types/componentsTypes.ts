import { RangeDaysWeatherType } from "./ACWeatherTypes"

export type WeatherDispatchProps = {
  onGetWeather(): void
  onGetWeatherName(name: string): void
  onGetWeatherGeo(lat: number, lot: number): void
  onGetForecastName(city: string): void
  onGetHoursWeather(name: string): void
}

export type DataTimeContainerPropsType = {
  cityName: null | string
  countryName: null | string
}

export type TodayWeatherContainerPropsType = {
  temperatureC: null | number
  weatherFirst: null | string
  windSpeedK: null | number
  humidity: null | number
}

export type WeatherForecastContainerPropsType = {
  weatherRange: null | Array<RangeDaysWeatherType> | undefined
}

export type OnGetWeatherNameContainerMethodsType = {
  onGetWeatherName(city: string): void
}

