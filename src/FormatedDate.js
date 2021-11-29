import React from "react";

export default function FormatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let min = props.date.getMinutes();
  return (
    <h3>
      {day} {hours}:{min}
    </h3>
  );
}
