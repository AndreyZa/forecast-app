import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ICitiesAction } from '../store/actions';
import { ICitiesStore } from '../store/ICitiesStore';
import { CitiesActions } from '../store/CitiesActions';

const City: React.FC<{ changeInCity: () => ICitiesAction }> = ({ changeInCity }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { cityName } = useParams();

  useEffect(() => {
    return () => {
      changeInCity();
    };
  });

  return <div>City: {cityName}</div>;
};

const mapDispatchToProps = {
  changeInCity: CitiesActions.changeInCity,
};

export default connect(() => {}, mapDispatchToProps)(City);
