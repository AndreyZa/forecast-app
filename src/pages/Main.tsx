import React from 'react';
import Header from '../components/Header';

export interface IMain {
  lastEntered: string[];
  changeLastEntered: (newCity: string) => void;
}

// indicates main page for user
export const Main: React.FC<IMain> = (props: IMain) => (
  <div>
    <span>Main</span>
    <Header {...props} />
  </div>
);
