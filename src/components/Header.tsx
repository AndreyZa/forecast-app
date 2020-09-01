import React, { useState } from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Input, InputGroup } from 'reactstrap';
import CityCard from '../components/CityCard';
import { IApplicationStore } from '../store';
import { CitiesActions } from '../store/CitiesActions';
import '../styles/Header.css';

export interface IHeaderProps {
  citiesInStore: string[];
  lastEntered: string[];
  fetch: (name: string) => AnyAction;
  changeLastEntered: (newCity: string) => void;
}

const Header: React.FC<IHeaderProps> = ({
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

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (trimmedValue && trimmedValue.length > 2) {
      if (!citiesInStore.find((cityFromStore: string) => trimmedValue === cityFromStore)) {
        fetch(trimmedValue);
      }
    }
    setCity(trimmedValue);
    if (trimmedValue && !lastEntered.includes(trimmedValue)) {
      changeLastEntered(value);
    }
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
        <InputGroup>
          <Input
            className="header-input"
            type="text"
            name="city"
            value={city}
            autoComplete="off"
            onChange={onChange}
          />
          <Button color="primary" type="submit">
            Search
          </Button>
        </InputGroup>
      </form>
      <div className="header-last-entered-list">
        <ButtonGroup>
          {lastEntered.map((lastEnter: string, index: number) => (
            <Button key={index + lastEnter} onClick={listItemClick}>
              {lastEnter}
            </Button>
          ))}
        </ButtonGroup>
      </div>
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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // async action creator does not have type property
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetch: (cityName: string) => dispatch(CitiesActions.fetchCity(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
