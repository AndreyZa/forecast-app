import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ICity } from '../domain/ICity';
import { IApplicationStore } from '../store';
import { ICitiesAction } from '../store/actions';
import { CitiesActions } from '../store/CitiesActions';
import '../styles/CityCard.css';

export interface ICityCardProps {
  nameCity: string;
  city: ICity;
  lastEntered: string[];
  changeLastEntered: (newCity: string) => void;
  changeInCity: () => ICitiesAction;
}

const CityCard: React.FC<ICityCardProps> = ({
  city,
  lastEntered,
  changeLastEntered,
  changeInCity,
}) => {
  useEffect(() => {
    if (city && lastEntered.filter((lastEnter: string) => lastEnter === city.name).length < 1) {
      changeLastEntered(city.name);
    }
  });

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
      <Link to={`/city/${city.name}`} onClick={changeInCity}>
        {city.name}
      </Link>
    </div>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (
  state: IApplicationStore,
  ownProps: {
    nameCity: string;
    lastEntered: string[];
    changeLastEntered: (newCity: string) => void;
  }
) => ({
  city: state.citiesWeatherToday.cities[ownProps.nameCity],
  nameCity: ownProps.nameCity,
  changeLastEntered: ownProps.changeLastEntered,
});

const mapDispatchToProps = {
  changeInCity: CitiesActions.changeInCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
