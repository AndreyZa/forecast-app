import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import CityContainer from '../components/CityContainer';
import '../styles/City.css';

export const City: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const history = useHistory();

  const onBack = () => history.goBack();

  return (
    <div className="page">
      <div className="top-label-with-btn">
        <Button color="warning" onClick={onBack}>
          Back
        </Button>
        <h3>{cityName}</h3>
      </div>
      <CityContainer nameCity={cityName} />
    </div>
  );
};
