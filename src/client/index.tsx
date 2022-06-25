import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./utils/history";
import { RecoilRoot } from "recoil";
import { App } from "./components/App";

ReactDOM.render(
  <RecoilRoot>
    <Router history={history}>
      <App />
    </Router>
  </RecoilRoot>,
  document.getElementById("root"),
);
