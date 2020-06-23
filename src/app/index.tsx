import React, { FC, useCallback } from 'react';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Routes from './Routes';
import ApiContext from './contexts/PokeApiContext';

const App: FC = () => {
  const history = createBrowserHistory();

  const mapRoutes = useCallback(
    () =>
      Routes.map((page, index) => (
        <Route
          key={index}
          exact={page.exact || false}
          path={page.path}
          component={page.component}
        />
      )),
    []
  );

  return (
    <ApiContext>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            {mapRoutes()}
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Router>
    </ApiContext>
  );
};

export default App;
