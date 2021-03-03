import { ThunkAction } from 'redux-thunk'
import { GET_WEATHER_RANGE } from '../redux/forecast5Reducer'
import { AppStateType } from '../redux/store'
import { GET_WEATHER } from '../redux/weatherReducer'
import { InitialStateType, RangeDaysWeatherType } from './componentsTypes'

export type ActionsType = SetWeatherType 

export type SetWeatherType = {
  type: typeof GET_WEATHER
  objectWeather: InitialStateType
}

// export type ActionsTypeRange = SetWeatherRangeType

export type SetWeatherRangeType = {
  type: typeof GET_WEATHER_RANGE
  city: string
  weatherRange: Array<RangeDaysWeatherType>
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export type ThunkTypeRange = ThunkAction<Promise<void>, AppStateType, unknown, SetWeatherRangeType>


