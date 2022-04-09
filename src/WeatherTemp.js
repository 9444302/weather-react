import React, { useState } from "react";

export default function WeatherTemp(props) {

  function celcius() {
    return ((props.fahr - 32) * 5) / 9;
  }

  if (props.unit === "fahr") {
    return (
      <span>
        <span className="deg"> {props.tempFahr}°</span>
        </span> );

  } else {
    return (
      <span>
        <span className="deg">{Math.round(((props.tempFahr - 32) * 5) / 9)}°</span>
      </span>
    );
  }
}
