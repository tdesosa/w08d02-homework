import React from 'react';

const WeatherData = (props) => {

  const weatherInfo = props.weather.map((weatherParam, i) => {
      return (
        <li key={i}>
          Current Weather: {weatherParam.cloud} 
        </li>
        )
    });

  return (
      <div>
        <h2>Weather Data</h2>
        <ul>
          {weatherInfo}
        </ul>
      </div>
    )

};


export default WeatherData;