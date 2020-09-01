import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
import { ICity } from '../domain/ICity';
import { IApplicationStore } from '../store';
import '../styles/CityCard.css';

export interface ICityCardProps {
  city: ICity;
}

const CityCard: React.FC<ICityCardProps> = ({ city }) => {
  return city ? (
    <div className="city-card-container">
      <Card className="city-card">
        <CardBody>
          <CardTitle>{city.name}</CardTitle>
          <CardSubtitle>{city.main.temp} &#8451;</CardSubtitle>
        </CardBody>
        <div className="city-card-img">
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
        </div>
        <CardBody>
          <CardText>
            {city.weather[0].description.charAt(0).toUpperCase() +
              city.weather[0].description.slice(1)}
          </CardText>
          <Table>
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
                <td>{city.wind.speed} meter / sec</td>
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
          </Table>
          <Link to={`/city/${city.name}`}>{city.name}</Link>
        </CardBody>
      </Card>
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
