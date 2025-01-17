import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AppContext from "./context";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transtion: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <AppContext>
        <App />
      </AppContext>
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
