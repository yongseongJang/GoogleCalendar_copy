import * as React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import { history } from "./utils/history";
import { RecoilRoot } from "recoil";
import { App } from "./components/App";
import { ErrorBoundary } from "./components/ErrorBoundary";

const root = createRoot(document.getElementById("root")!);

root.render(
  <ErrorBoundary>
    <RecoilRoot>
      <Router history={history}>
        <App />
      </Router>
    </RecoilRoot>
  </ErrorBoundary>,
);
