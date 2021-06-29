import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import routes from "./routes";

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
          <Route render={() => <h1>Esta ruta no existe</h1>} />
        </Switch>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default App;
