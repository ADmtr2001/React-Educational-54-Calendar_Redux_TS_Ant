import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesNames} from "../routes";

const AppRouter = () => {
  const auth = true;
  return (
    auth
      ? (<Switch>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}/>
        )}
      <Redirect to={RoutesNames.EVENT}/>
      </Switch>)
      : (<Switch>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}/>
        )}
        <Redirect to={RoutesNames.LOGIN}/>
      </Switch>)
  );
};

export default AppRouter;