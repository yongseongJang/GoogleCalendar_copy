/** @jsxImportSource @emotion/react */
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AnnualCalendar } from "../../feature/AnnualCalendar";
import { MonthlyCalendar } from "../../feature/MonthlyCalendar";
import { GlobalNavigationBar } from "../../feature/GlobalNavigationBar";
import { css } from "@emotion/react";

function App() {
  return (
    <div css={app}>
      <GlobalNavigationBar />
      <Switch>
        <Route path="/year" component={AnnualCalendar} />
        <Route path="/month" component={MonthlyCalendar} />
      </Switch>
    </div>
  );
}

const app = css`
  height: 100%;
`;

export default App;
