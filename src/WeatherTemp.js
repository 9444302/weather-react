import React from "react";

export default function WeatherTemp(props) {

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
