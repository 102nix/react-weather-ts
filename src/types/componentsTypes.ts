export type InitialStateType = {
  cityName: null | string
  countryName: null | string
  temperatureC: null | number
  windSpeedK: null | number
  weatherFirst: null | string
  weatherSecond: null | string
  humidity: null | number
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

export type WeatherDispatchProps = {
  onGetWeather(): void
  onGetWeatherName(name: string): void
  onGetWeatherGeo(lat: number, lot: number): void
  onGetForecastName(city: string): void
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
  weatherRange: null | Array<RangeDaysWeatherType>
}

export type OnGetWeatherNameContainerMethodsType = {
  onGetWeatherName(city: string): void
}

