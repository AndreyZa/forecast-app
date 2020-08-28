import React, { useState } from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import CityCard from '../components/CityCard';
import { IApplicationStore } from '../store';
import { CitiesActions } from '../store/CitiesActions';
import '../styles/Header.css';

export interface IHeaderProps {
  inCity: boolean;
  citiesInStore: string[];
  lastEntered: string[];
  fetch: (name: string) => AnyAction;
  changeLastEntered: (newCity: string) => void;
}

const Header: React.FC<IHeaderProps> = ({
  inCity,
  citiesInStore,
  fetch,
  lastEntered,
  changeLastEntered,
}) => {
  const [city, setCity] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);
  const listItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
    // here we need properties that
    // does not exist in React type EventTarget, but exist in native event
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCity(event.target.innerText);

  if (inCity) {
    // if we in city route we need hide Header
    return <div></div>;
  }

  const onSearch = (value: string) => {
    if (value.trim() && value.length > 2) {
      if (!citiesInStore.find((cityFromStore: string) => value === cityFromStore)) {
        fetch(value);
      }
    }
    setCity(value);
    changeLastEntered(value);
  };

  const onSubmitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    // React Event type does not know about form property `elements`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onSearch(event.target.elements.city.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitSearch}>
        <input
          className="header-input"
          type="text"
          name="city"
          value={city}
          autoComplete="off"
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
      {lastEntered.length === 0
        ? null
        : city.trim() && (
            <ul className="header-last-entered-list">
              {lastEntered.map((lastEnter: string, index: number) => (
                <li key={index + lastEnter} onClick={listItemClick}>
                  {lastEnter}
                </li>
              ))}
            </ul>
          )}
      <CityCard nameCity={city} />
    </div>
  );
};

const mapStateToProps = (
  state: IApplicationStore,
  ownProps: { lastEntered: string[]; changeLastEntered: (newCity: string) => void }
) => ({
  ...ownProps,
  citiesInStore: Object.keys(state.citiesWeatherToday.cities),
  inCity: state.citiesWeatherToday.inCity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // async action creator does not have type property
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetch: (cityName: string) => dispatch(CitiesActions.fetchCity(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
