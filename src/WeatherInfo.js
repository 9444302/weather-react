import React from "react"
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props){
    return (
      <div className="weather-info">
        <h2>{props.data.cityName}</h2>
        <h3>Friday 06:45</h3>
        <h3>Sunny</h3>
        <div className="row main">
          <div className="col-sm-6">
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"black"}
              size={50}
              animate={true}
            />
            <br className="d-block d-sm-none" />
            <span className="deg">10°F</span>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity 30%</li>
              <li>Wind 10 km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );}