import { forecast5Const, InitialStateTypeRange } from '../types/ACforecast5types'
import { SetWeatherRangeType } from '../types/ACWeatherTypes'

let initialState: InitialStateTypeRange = {
  cityNameRange: null,
  weatherRange: null
}

const weatherReducer = (state = initialState, action: SetWeatherRangeType) => {
  switch (action.type) {
    case forecast5Const.GET_WEATHER_RANGE:
      return {
        ...state,
        city: action.city,
        weatherRange: action.weatherRange
      }
    default: return state
  }
}
export default weatherReducer
