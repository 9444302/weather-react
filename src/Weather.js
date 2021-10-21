import React from "react"
import ReactAnimatedWeather from "react-animated-weather";
import ForcastDay from "./ForcstDay";

import "./weather.css"

export default function Weather() {
    return (
      <div className="weather">
        <h1>Weather App</h1>
        <form>
          <input type="search" placeholder="Search" />
          <input type="submit" value="Search" />
        </form>
        <h2>New York</h2>
        <h3>Friday 06:45</h3>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"black"}
                size={50}
                animate={true}
              />
              <span className="deg"> 17°C</span>
              <br />
              <div className="des">Sunny</div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity 30%</li>
                <li>Precipitation</li>
                <li>Wind 4 km/hr</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <ForcastDay day="Fri" icon="CLEAR_DAY" temp="17" />
            </div>
            <div className="col-2">
              <ForcastDay day="Sat" icon="CLOUDY" temp="17" />
            </div>
            <div className="col-2">
              <ForcastDay day="Sun" icon="RAIN" temp="19" />
            </div>
            <div className="col-2">
              <ForcastDay day="Mon" icon="CLEAR_DAY" temp="18" />
            </div>
            <div className="col-2">
              <ForcastDay day="Tues" icon="CLOUDY" temp="15" />
            </div>
            <div className="col-2">
              <ForcastDay day="Wed" icon="RAIN" temp="20" />
            </div>
          </div>
        </div>
      </div>
    );
}