import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Main } from './pages/Main';
import City from './pages/City';
import Header from './components/Header';

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
      <BrowserRouter>
        <Header lastEntered={lastEnteredState} changeLastEntered={changeLastEntered} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/city/:cityName">
            <City />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
