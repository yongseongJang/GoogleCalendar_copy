import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./utils/history";
import { RecoilRoot } from "recoil";
import { App } from "./components/App";
import { ErrorBoundary } from "./components/ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <RecoilRoot>
      <Router history={history}>
        <App />
      </Router>
    </RecoilRoot>
  </ErrorBoundary>,
  document.getElementById("root"),
);
