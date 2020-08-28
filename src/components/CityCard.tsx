import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ICity } from '../domain/ICity';
import { IApplicationStore } from '../store';
import '../styles/CityCard.css';

export interface ICityCardProps {
  city: ICity;
}

const CityCard: React.FC<ICityCardProps> = ({ city }) => {
  return city ? (
    <div className="city-card">
      <h2>
        <span>
          {city.name} - {city.main.temp} &#8451;
        </span>
        <span className="city-card-feels-like">(Feels like {city.main.feels_like} &#8451;)</span>
      </h2>
      <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
      <table className="city-card-table">
        <thead>
          <tr>
            <th>Param</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pressure</td>
            <td>{city.main.pressure} hPa</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{city.main.humidity} %</td>
          </tr>
          <tr>
            <td>Wind Speed</td>
            <td>{city.wind.speed} meter / sec;</td>
          </tr>
          <tr>
            <td>Max temp</td>
            <td>{city.main.temp_max} &#8451;</td>
          </tr>
          <tr>
            <td>Min temp</td>
            <td>{city.main.temp_min} &#8451;</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/city/${city.name}`}>{city.name}</Link>
    </div>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (
  state: IApplicationStore,
  ownProps: {
    nameCity: string;
  }
) => ({
  city: state.citiesWeatherToday.cities[ownProps.nameCity],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
