import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { IForecast } from '../domain/IForecast';
import { IApplicationStore } from '../store';
import { ForecastActions } from '../store/forecast/ForecastActions';
import { CityForecastCard } from '../components/CityForecastCard';
import { capitalizeFirstLetter, convertTimeNumbersToStr } from '../utils';

export interface ICityContainerProps {
  nameCity: string;
  forecasts: IForecast[];
  fetchForecasts: (nameCity: string) => AnyAction;
}

export interface IViewForecast {
  time: string;
  icon: string;
  description: string;
  temp: number;
}

const CityContainer: React.FC<ICityContainerProps> = ({ nameCity, forecasts, fetchForecasts }) => {
  const createViewForecastData = () => {
    const viewsForecasts: { day: string; forecast: IViewForecast[] }[] = [];
    let currentForecasts = [...forecasts];

    while (currentForecasts.length) {
      const date = new Date(currentForecasts[0].dt_txt);

      const day = `${convertTimeNumbersToStr(date.getDate())}.${convertTimeNumbersToStr(
        date.getMonth() + 1
      )
        .split('')
        .reverse()
        .join('')}`;

      const forecast = {
        day,
        forecast: currentForecasts.slice(0, 8).map((weatherForecast: IForecast) => {
          const weatherForecastDate = new Date(weatherForecast.dt_txt);

          return {
            time: `${convertTimeNumbersToStr(
              weatherForecastDate.getHours()
            )}:${convertTimeNumbersToStr(weatherForecastDate.getMinutes())}`,
            icon: weatherForecast.weather[0].icon,
            description: capitalizeFirstLetter(weatherForecast.weather[0].description),
            temp: weatherForecast.main.temp,
          };
        }),
      };

      viewsForecasts.push(forecast);

      // each eight items have same day
      currentForecasts = currentForecasts.slice(8);
    }

    return viewsForecasts;
  };

  if (!forecasts) {
    fetchForecasts(nameCity);
    return <span>Loading</span>;
  }

  return (
    <div>
      {createViewForecastData().map(
        (viewForecast: { day: string; forecast: IViewForecast[] }, index: number) => (
          <CityForecastCard key={index + viewForecast.day} {...viewForecast} />
        )
      )}
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
