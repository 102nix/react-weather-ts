import React, { useEffect } from 'react';
import './Weather.scss';
import { connect } from 'react-redux'
import { onGetWeather, onGetWeatherName, onGetWeatherGeo } from '../../redux/weatherReducer';
import { onGetForecastName } from '../../redux/forecast5Reducer';
//Components:
import { DateTime } from '../DateTime/DateTime';
import { SelectCity } from '../SelectCity/SelectCity';
import { WeatherForecast } from '../WeatherForecast/WeatherForecast';
import { InputCity } from '../InputCity/InputCity';
import { TodayWeather } from '../TodayWeather/TodayWeather'
//types:
import { InitialStateType, WeatherDispatchProps, InitialStateTypeRange } from '../../types/componentsTypes'
import { AppStateType } from '../../redux/store'
// небольшой снег; небольшой дождь; туман; пасмурно; переменная облачность


type PropsType = InitialStateType & InitialStateTypeRange

const Weather: React.FC<PropsType & WeatherDispatchProps> = props => {

  useEffect(() => {
    handlerGeo()
  }, [])

  useEffect(() => {
    if (props.cityName !== null) {
      const city: string = props.cityName
      props.onGetForecastName(city)
    }
  }, [props.cityName])

  const showPosition = (position: any) => {
    props.onGetWeatherGeo(position.coords.latitude, position.coords.longitude)
  }

  const handlerGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }

  return (
    <div className="container">
      {
        props.cityName !== null ?
        <>
          <div className="row date-time">
            <DateTime
              cityName={props.cityName}
              countryName={props.countryName}
            />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 today-weather-all">
              <TodayWeather
                temperatureC={props.temperatureC}
                weatherFirst={props.weatherFirst}
                windSpeedK={props.windSpeedK}
                humidity={props.humidity}
              />
            </div>
            <div className="col-12 col-lg-6 weather-forecast">
              <WeatherForecast weatherRange={props.weatherRange} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <SelectCity onGetWeatherName={props.onGetWeatherName} />
            </div>
            <div className="col-12 col-lg-4">
              <button className="btn btn-link" onClick={handlerGeo}>Определить местоположение</button>
            </div>
            <div className="col-12 col-lg-4">
              <InputCity onGetWeatherName={props.onGetWeatherName} />
            </div>
          </div>
        </>
        : <>
        <div className="row title-no-geo text-center">
          Город по данным геолокации не опредлён!
        </div>
        <div className="row mt-5 no-geo-for-city">
          <div className="select-city-no-geo">
            <div className="note-select-city">Выберите город из списка:</div>
              <SelectCity onGetWeatherName={props.onGetWeatherName} />
            <div>или:</div>
          </div>
          <div className="write-city-no-geo">
            <div className="note-write-city">Напишите город:</div>
            <InputCity onGetWeatherName={props.onGetWeatherName}/>
          </div>
        </div>
        </>
      }
    </div>
  )
}
let mapStateToProps = (state: AppStateType): PropsType => {
  return {
    cityName: state.weatherReducer.cityName,
    countryName: state.weatherReducer.countryName,
    temperatureC: state.weatherReducer.temperatureC,
    windSpeedK: state.weatherReducer.windSpeedK,
    weatherFirst: state.weatherReducer.weatherFirst,
    weatherSecond: state.weatherReducer.weatherSecond,
    humidity: state.weatherReducer.humidity,
    cityNameRange: state.forecast5Reducer.cityNameRange,
    weatherRange: state.forecast5Reducer.weatherRange,
  }
}
const connector = connect(mapStateToProps, { onGetWeather, onGetWeatherName, onGetWeatherGeo, onGetForecastName })
export default connector(Weather)