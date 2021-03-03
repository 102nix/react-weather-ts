import React from 'react';
import { DataTimeContainerPropsType } from '../../types/componentsTypes';

export const daysMonth: Array<string> = [
  'Января', 
  'Февраля', 
  'Марта', 
  'Апреля', 
  'Мая', 
  'Июня', 
  'Июля',
  'Августа,', 
  'Сентября', 
  'Октября', 
  'Ноября', 
  'Декабря'
]

export const DateTime: React.FC<DataTimeContainerPropsType> = props => {

  const now = new Date()
  const daysWeek: Array<string> = [
    'Воскресенье', 
    'Понедельник', 
    'Вторник', 
    'Среда', 
    'Четверг', 
    'Пятница', 
    'Суббота'
  ]

  return(
    <>
      <div className="city"><strong>{props.cityName}, {props.countryName}</strong></div>
      <div className="date">
        {now.getDate()} {daysMonth[now.getMonth()]} {now.getFullYear()}, {daysWeek[now.getDay()]}
      </div>
    </>
  )
}