import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { IForecast } from '../domain/IForecast';
import { IApplicationStore } from '../store';
import { ForecastActions } from '../store/forecast/ForecastActions';
import { CityForecastCard } from '../components/CityForecastCard';
import '../styles/CityContainer.css';

export interface ICityContainerProps {
  nameCity: string;
  forecasts: IForecast[];
  fetchForecasts: (nameCity: string) => AnyAction;
}

const CityContainer: React.FC<ICityContainerProps> = ({ nameCity, forecasts, fetchForecasts }) => {
  if (!forecasts) {
    fetchForecasts(nameCity);
    return <span>Loading</span>;
  }

  return (
    <div>
      <ul className="city-container-list">
        {forecasts.map((forecast: IForecast, index: number) => (
          <li key={index}>
            <CityForecastCard {...forecast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: IApplicationStore, ownProps: { nameCity: string }) => ({
  forecasts: state.forecasts[ownProps.nameCity],
  nameCity: ownProps.nameCity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // async action creator does not have type property
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetchForecasts: (nameCity: string) => dispatch(ForecastActions.fetchForecast(nameCity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
