import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forcast from "./Forcast";

import "./weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Sydney");
  const [unit, setUnit] = useState("fahr");

  function getWeather(response) {
    setWeather({
      ready: true,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temp: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coord: response.data.coord,
    });
  }
  function handleCel(event) {
    event.preventDefault();
    setUnit("cel");
  }
  function handleFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }
  function getCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37bec3b1fe145a2ee30d91fc33082fd5&units=imperial`;
    axios.get(apiUrl).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    if (unit === "fahr") {
      return (
        <div className="weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-100 text-box"
                  onChange={updateCity}
                />
              </div>
              <div className="col-4">
                <input type="submit" value="Search" className="w-100 buttons" />
              </div>
              <div className="col-2">
                <button className="buttons" onClick={handleCel}>°F</button>
              </div>
            </div>
          </form>

          <WeatherInfo data={weather} unit={unit} />
          <Forcast data={weather} unit={unit} />
        </div>
      );
    } else {
      return (
        <div className="weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-100"
                  onChange={updateCity}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="w-100 buttons"
                />
              </div>
              <div className="col-2">
                <button className="buttons" onClick={handleFahr}>
                  °C
                </button>
              </div>
            </div>
          </form>

          <WeatherInfo data={weather} unit={unit} />
          <Forcast data={weather} unit={unit} />
        </div>
      );
    }
  } else {
    getCity();
    return <h2>Loading...</h2>;
  }
}
