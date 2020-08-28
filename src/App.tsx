import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Main } from './pages/Main';
import { City } from './pages/City';

const App: React.FC = () => {
  const [lastEnteredState, setLastEntered] = useState<string[]>([]);

  const changeLastEntered = (newCity: string) =>
    setLastEntered(
      lastEnteredState.length !== 5
        ? [...lastEnteredState, newCity]
        : [...lastEnteredState.slice(1), newCity]
    );

  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Main lastEntered={lastEnteredState} changeLastEntered={changeLastEntered} />
          </Route>
          <Route exact path="/city/:cityName">
            <City />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
