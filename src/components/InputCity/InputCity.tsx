import React from 'react';
import { OnGetWeatherNameContainerMethodsType } from '../../types/componentsTypes';

export const InputCity: React.FC<OnGetWeatherNameContainerMethodsType> = props => {

  const onSearchCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onGetWeatherName(event.target.value)
  }

  return(
    <input 
      type="text" 
      className="form-control" 
      placeholder="Например: Ufa"
      onChange={onSearchCity}
    />
  )
}