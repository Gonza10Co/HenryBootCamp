import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Details from "./components/details";
import Results from "./components/results";
import store from './store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/details/:itemID" component={Details} />
        <Redirect from="/" to="/results" />
      </Switch>
    </BrowserRouter>
  </Provider>
);
