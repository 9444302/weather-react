import React from "react"
import WeatherIcons from "./WeatherIcons"

export default function WeatherInfo(props){
    return (
      <div className="weather-info">
        <h2>{props.data.cityName}</h2>
        <h3>Friday 06:45</h3>
        <h3 className="text-capitalize">{props.data.description}</h3>
        <div className="row main">
          <div className="col-sm-6">
              <WeatherIcons className="icon" code={props.data.icon} size={70} />
            <span className="deg">{props.data.temp}°F</span>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity {props.data.humidity}%</li>
              <li>Wind {props.data.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );}