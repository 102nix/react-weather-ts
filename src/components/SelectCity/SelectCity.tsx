import React from 'react';
import { OnGetWeatherNameContainerMethodsType } from '../../types/componentsTypes';

export const SelectCity: React.FC<OnGetWeatherNameContainerMethodsType> = props => {

  const onHandlerCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onGetWeatherName(event.target.value)
  }
  
  return(
    <select className="form-control" onChange={onHandlerCity}>
      <option value="">Выбрать город...</option>
      <option value="Alanya">Алания</option>
      <option value="Antalya">Анталья</option>
      <option value="Vladivostok">Владивосток</option>
      <option value="Yekaterinburg">Екатеринбург</option>
      <option value="Kazan">Казань</option>
      <option value="Kaliningrad">Калининград</option>
      <option value="Kamchatka">Камчатка</option>
      <option value="Kiev">Киев</option>
      <option value="Minsk">Минск</option>
      <option value="Moscow">Москва</option>
      <option value="Novosibirsk">Новосибирск</option>
      <option value="Sankt-Peterburg">Санкт-Петербург</option>
      <option value="Sochi">Сочи</option>
      <option value="Ufa">Уфа</option>
      <option value="Khabarovsk">Хабаровск</option>
    </select>
  )
}