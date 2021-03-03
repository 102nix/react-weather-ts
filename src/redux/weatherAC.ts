import { SetWeatherType } from "../types/ACTypes";
import { InitialStateType } from "../types/componentsTypes";
import { GET_WEATHER } from "./weatherReducer";

export const setWeather = (objectWeather: InitialStateType): SetWeatherType => ({type: GET_WEATHER, objectWeather})
