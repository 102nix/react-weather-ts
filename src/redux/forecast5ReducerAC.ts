import { WeatherAPI } from '../api/api'
import { forecast5Const, RangeDaysWeatherType } from "../types/ACforecast5types"
import { SetWeatherRangeType, ThunkTypeRange } from "../types/ACWeatherTypes"

export const setWeatherRange = 
  (city: string, weatherRange: Array<RangeDaysWeatherType>): 
    SetWeatherRangeType => ({type: forecast5Const.GET_WEATHER_RANGE, city, weatherRange})

function getDatesFromFiveDays (list:any): Array<RangeDaysWeatherType> {
 
  const arrayDaysWeather: Array<RangeDaysWeatherType> = [
    {
      temperatureC: Math.ceil(list[0].main.temp - 273.15),
      date: list[0].dt_txt.split(' ')[0],
      time: list[0].dt_txt.split(' ')[1],
      wind: list[0].wind.speed,
      weather: list[0].weather[0].description
    },
    {
      temperatureC: Math.ceil(list[8].main.temp - 273.15),
      date: list[8].dt_txt.split(' ')[0],
      time: list[8].dt_txt.split(' ')[1],
      wind: list[8].wind.speed,
      weather: list[8].weather[0].description
    },
    {
      temperatureC: Math.ceil(list[16].main.temp - 273.15),
      date: list[16].dt_txt.split(' ')[0],
      time: list[16].dt_txt.split(' ')[1],
      wind: list[16].wind.speed,
      weather: list[16].weather[0].description
    },
    {
      temperatureC: Math.ceil(list[24].main.temp - 273.15),
      date: list[24].dt_txt.split(' ')[0],
      time: list[24].dt_txt.split(' ')[1],
      wind: list[24].wind.speed,
      weather: list[24].weather[0].description
    },
    {
      temperatureC: Math.ceil(list[32].main.temp - 273.15),
      date: list[32].dt_txt.split(' ')[0],
      time: list[32].dt_txt.split(' ')[1],
      wind: list[32].wind.speed,
      weather: list[32].weather[0].description
    }
  ]
  return(arrayDaysWeather)
}

export const onGetForecastName = (name: string): ThunkTypeRange => async (dispatch) => {
  try {
    const response = await WeatherAPI.getForecastName(name)
    dispatch(setWeatherRange(name, getDatesFromFiveDays(response.data.list)))
  } catch (error) {
    console.log(error)
  }
}