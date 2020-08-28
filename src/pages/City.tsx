import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CityContainer from '../components/CityContainer';

export const City: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const history = useHistory();

  const onBack = () => history.goBack();

  return (
    <div className="page">
      <button onClick={onBack}>Back</button>
      City: {cityName} <CityContainer nameCity={cityName} />
    </div>
  );
};
