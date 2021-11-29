import React, { useState } from "react";
import ForcastDay from "./ForcstDay";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Sydney");

  function getWeather(response) {
    console.log(response);
    setWeather({
      ready: true,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temp: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }
  function getCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3afb5ac39a8b25d1b177f90d8e9dd63d&units=imperial`;
    axios.get(apiUrl).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Search"
                className="w-100"
                onChange={updateCity}
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
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
    return <h2>Loading...</h2>;
  }
}
