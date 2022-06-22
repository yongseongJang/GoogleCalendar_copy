import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AnnualCalendar } from "../AnnualCalendar";
import { MonthlyCalendar } from "../MonthlyCalendar";
import { GlobalNavigationBar } from "../GlobalNavigationBar";
import { useDateSetting } from ".";

function App() {
  const { year, setYear, month, setMonth } = useDateSetting();
  return (
    <>
      <GlobalNavigationBar year={year} setYear={setYear} />
      <Switch>
        <Route path="/year" render={() => <AnnualCalendar year={year} />} />
        <Route
          path="/month"
          render={() => <MonthlyCalendar year={year} month={month} />}
        />
      </Switch>
    </>
  );
}

export default App;
