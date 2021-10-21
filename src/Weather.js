import React from "react"
import ReactAnimatedWeather from "react-animated-weather";
import ForcastDay from "./ForcstDay";
import axios from "axios";

import "./weather.css"

export default function Weather() {
  return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Search" className="w-100" />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="w-100" />
            </div>
          </div>
        </form>
        <h2>New York</h2>
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
            <span className="deg"> 17°C</span>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity 30%</li>
              <li>Wind 4 km/hr</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-2">
            <ForcastDay day="Fri" icon="CLEAR_DAY" temp="17" />
          </div>
          <div className="col-6 col-sm-2">
            <ForcastDay day="Sat" icon="CLOUDY" temp="17" />
          </div>
          <div className="col-6 col-sm-2">
            <ForcastDay day="Sun" icon="RAIN" temp="19" />
          </div>
          <div className="col-6 col-sm-2">
            <ForcastDay day="Mon" icon="CLEAR_DAY" temp="18" />
          </div>
          <div className="col-6 col-sm-2">
            <ForcastDay day="Tues" icon="CLOUDY" temp="15" />
          </div>
          <div className="col-6 col-sm-2">
            <ForcastDay day="Wed" icon="RAIN" temp="20" />
          </div>
        </div>
      </div>
    );
}