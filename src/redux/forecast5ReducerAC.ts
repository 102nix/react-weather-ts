import { SetWeatherRangeType } from "../types/ACTypes";
import { RangeDaysWeatherType } from "../types/componentsTypes";
import { GET_WEATHER_RANGE } from "./forecast5Reducer";

export const setWeatherRange = (city: string, weatherRange: Array<RangeDaysWeatherType>): SetWeatherRangeType => ({type: GET_WEATHER_RANGE, city, weatherRange})
