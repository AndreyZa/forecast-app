import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { IViewForecast } from '../components/CityContainer';
import '../styles/CityForecastCard.css';

export interface ICityForecastCardProps {
  day: string;
  forecast: IViewForecast[];
}

export const CityForecastCard: React.FC<ICityForecastCardProps> = ({ day, forecast }) => (
  <div className="forecast forecast-block">
    <h3>{day}</h3>
    <ListGroup horizontal>
      {forecast
        .sort((a, b) => {
          const [dayMounth, mounth] = day.split('.');

          const aDate = new Date(
            `${new Date().getFullYear()}.${mounth.split('').reverse().join('')}.${dayMounth} ${
              a.time
            }`
          );
          const bDate = new Date(
            `${new Date().getFullYear()}.${mounth.split('').reverse().join('')}.${dayMounth} ${
              b.time
            }`
          );

          if (aDate > bDate) {
            return 1;
          } else if (aDate < bDate) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((weatherForecast: IViewForecast, index) => (
          <ListGroupItem key={weatherForecast.description + index}>
            <div>
              <h4>{weatherForecast.time}</h4>
              <img src={`http://openweathermap.org/img/wn/${weatherForecast.icon}@2x.png`} />
              <div>
                <h4>{weatherForecast.temp} &#8451;</h4>
                <span>{weatherForecast.description}</span>
              </div>
            </div>
          </ListGroupItem>
        ))}
    </ListGroup>
  </div>
);
