import React, { useState, useEffect } from "react";
import axios from "axios";
import ForcastDay from "./ForcstDay";

import "./forcast.css";

export default function Forcast(props){
    let [loaded, setLoaded] = useState(false);
    let [forcast, setForcast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data.coord]);
    
    function handleResponse(response) {
setForcast(response.data.daily)
setLoaded(true);
    }

    function load() {
    let lat = props.data.coord.lat
    let lon = props.data.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3afb5ac39a8b25d1b177f90d8e9dd63d&units=imperial`;
 
    axios.get(apiUrl).then(handleResponse);
    }
 
    if (loaded) {
    return (
      <div className="row">
          {forcast.map(function (dailyForcast, index){
              if (index < 6) {
                  return(
              <div className="col-6 col-sm-2" key={index}>
          <ForcastDay data={dailyForcast}/>
        </div>
          );
        } else {
            return null;
        }
          })}
        
      </div>
    );
} else {
    load();
    return null;
}
}
