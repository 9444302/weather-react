import React, { useState } from "react";


export default function WeatherTemp(props) {
    const[unit, setUnit] = useState("fahrTemp")
    function showFahr(event) {
        event.preventDefault();
        setUnit("fahrTemp")
    }
    function showCel(event) {
        event.preventDefault();
        setUnit("celTemp")
    }

    function celcius() {
        return (props.fahr -32) * 5/9
    }

    if (unit === "fahrTemp"){
    return(
        <span>
        <span className="deg">{props.fahr}°</span>
            <span className="conversion-links"> <a href="/" onClick={showFahr}>F</a> | <a href="/" onClick={showCel}>C</a></span>
          </span>
    );
} else {
    return (
      <span>
        <span className="deg">{Math.round(celcius())}°</span>
        <span className="conversion-links">
          {" "}
          <a href="/" onClick={showFahr}>
            F
          </a>{" "}
          |{" "}
          <a href="/" onClick={showCel}>
            C
          </a>
        </span>
      </span>
    );
}}