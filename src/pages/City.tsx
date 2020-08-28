import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ICitiesAction } from '../store/actions';
import { CitiesActions } from '../store/CitiesActions';
import CityContainer from '../components/CityContainer';

export interface ICityProps {
  changeInCity: () => ICitiesAction;
}

const City: React.FC<ICityProps> = ({ changeInCity }) => {
  const { cityName } = useParams<{ cityName: string }>();

  useEffect(() => {
    return () => {
      // after unmount we need return to Header that directly depend from InCity value
      changeInCity();
    };
  });

  return (
    <div>
      City: {cityName} <CityContainer nameCity={cityName} />
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  changeInCity: CitiesActions.changeInCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
