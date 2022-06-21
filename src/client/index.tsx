import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./utils/history";
import { App } from "./components/App";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root"),
);
