import React, { useEffect, useState } from 'react';
//import imgs weather:
import grad from "../../imgs/grad.png";
import rain from "../../imgs/rain1.png";
import storm from "../../imgs/storm.png";
import sun from "../../imgs/sun.png";
import suncloud from "../../imgs/suncloud.png";
import snow from "../../imgs/snow1.png";
import tuman from "../../imgs/tuman.png";
import cloud from "../../imgs/cloud.png";
//types:
import { TodayWeatherContainerPropsType } from '../../types/componentsTypes';

export const TodayWeather: React.FC<TodayWeatherContainerPropsType> = props => {

  const [currentWeatherPicture, setWeatherPicture] = useState(sun)

  useEffect(() => {

    let weather: string = ''
    
    if (props.weatherFirst !== null) weather = props.weatherFirst

    if (weather.trim() === 'снег' || weather.trim() === 'небольшой снег' || weather.trim() === 'небольшой снегопад') {
      setWeatherPicture(snow)
    } else if (weather.trim() === 'дождь' || weather.trim() === 'небольшой дождь') {
      setWeatherPicture(rain)
    } else if (weather.trim() === 'туман') {
      setWeatherPicture(tuman)
    } else if (weather.trim() === 'ясно') {
      setWeatherPicture(sun)
    } else if (weather.trim() === 'облачно с прояснениями') {
      setWeatherPicture(suncloud)
    } else if (weather.trim() === 'облачно' || weather.trim() === 'пасмурно' || weather.trim() === 'переменная облачность') {
      setWeatherPicture(cloud)
    } else if (weather.trim() === 'гроза') {
      setWeatherPicture(storm)
    } else if (weather.trim() === 'град') {
      setWeatherPicture(grad)
    }    
  }, [props.weatherFirst])

  return (
    <>
      <div className="today">Сегодня</div>
      <div className="row weather-info">
        <div className="col-12 col-lg-6">
          <div className="temp-val">
            {props.temperatureC},C
          </div>
        </div>
        <div className="col-12 col-lg-6 temp-settings">
          <div className="weather">
            {props.weatherFirst} <img src={currentWeatherPicture} className="img-fluid" alt=""/>
          </div>
          <div className="wind">
            Скорость ветра: {props.windSpeedK} м/с
          </div>
            <div className="humidity">Влажность: {props.humidity}%</div>
        </div>
      </div>
    </>
  )
}