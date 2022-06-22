/** @jsxImportSource @emotion/react */
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AnnualCalendar } from "../AnnualCalendar";
import { MonthlyCalendar } from "../MonthlyCalendar";
import { GlobalNavigationBar } from "../GlobalNavigationBar";
import { useDateSetting } from ".";
import { css } from "@emotion/react";

function App() {
  const { year, setYear, month, setMonth } = useDateSetting();
  return (
    <div css={app}>
      <GlobalNavigationBar year={year} setYear={setYear} />
      <Switch>
        <Route path="/year" render={() => <AnnualCalendar year={year} />} />
        <Route
          path="/month"
          render={() => <MonthlyCalendar year={year} month={month} />}
        />
      </Switch>
    </div>
  );
}

const app = css`
  height: 100%;
`;

export default App;
