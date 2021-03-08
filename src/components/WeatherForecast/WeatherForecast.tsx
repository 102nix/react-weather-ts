import React from 'react';
import { WeatherForecastContainerPropsType } from '../../types/componentsTypes'
import { daysMonth } from '../DateTime/DateTime'

export const WeatherForecast: React.FC<WeatherForecastContainerPropsType> = props => {
  return(
    <>
      { 
        props.weatherRange !== null &&
        props.weatherRange?.map((elem, i) => {
          const dateValue = elem.date!.split('-')
          const newdateValue = new Date(+dateValue[0], (+dateValue[1] - 1), +dateValue[2])
          return(<div className="row one-day">
            <div className="date" key = {i}>
              <strong>{newdateValue.getDate()} {daysMonth[newdateValue.getMonth()]}</strong>
            </div>
            <div className="temp">{elem.temperatureC}, C</div>
            <div className="weather">{elem.weather}</div>
            <div className="wind">Ветер: {elem.wind} м/с</div>
          </div>)
        })
      }
    </>
  )

}

