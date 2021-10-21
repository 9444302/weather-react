import React from "react"
import Weather from "./Weather"

import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <div className="source-code"><a
        href="https://github.com/9444302/weather-react"
        target="_blank"
        rel="noreferrer"
      >Open source code</a> by Tori</div>
    </div>
  );
}

export default App;
