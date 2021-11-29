import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForcastDay(props) {
  return (
    <div className="day">
      <div>{props.day}</div>
      <ReactAnimatedWeather
        icon={props.icon}
        color={"black"}
        size={30}
        animate={true}
      />
      <div>{props.temp}°C</div>
    </div>
  );
}
