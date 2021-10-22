import React, { useState } from "react"
import ForcastDay from "./ForcstDay";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./weather.css"

export default function Weather() {
  const [weather, setWeather] = useState({read: false})
  const [city, setCity] = useState("Paris")
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37bec3b1fe145a2ee30d91fc33082fd5&units=imperial`;

  function getWeather(response){
    setWeather({
      ready: true,
cityName: response.data.name
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
  }
  function getCity(){
 axios.get(apiUrl).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
if (weather.ready){
  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search"
              className="w-100"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="w-100" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weather}/>
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
} else {
getCity();
  return (
    "loading"
  )}}