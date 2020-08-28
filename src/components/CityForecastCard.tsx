import React from 'react';
import { IForecast } from '../domain/IForecast';
import '../styles/CityForecastCard.css';

export const CityForecastCard: React.FC<IForecast> = ({ dt_txt, weather, main, clouds, wind }) => (
  <div className="forecast">
    <h3>{dt_txt}</h3>
    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
    <table>
      <thead>
        <tr>
          <th>Param</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Temp</td>
          <td>
            {main.temp} &#8451; (Feels like {main.feels_like} &#8451;)
          </td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{main.pressure} hPa</td>
        </tr>
        <tr>
          <td>Humudity</td>
          <td>{main.humidity} %</td>
        </tr>
        <tr>
          <td>Clouds</td>
          <td>{clouds.all}</td>
        </tr>
        <tr>
          <td>Wind</td>
          <td>{wind.speed} meter / sec</td>
        </tr>
      </tbody>
    </table>
  </div>
);
