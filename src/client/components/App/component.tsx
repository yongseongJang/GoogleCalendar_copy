import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AnnualCalendar } from "../AnnualCalendar";
import { GlobalNavigationBar } from "../GlobalNavigationBar";
import { useDateSetting } from ".";

function App() {
  const { year, setYear } = useDateSetting();
  return (
    <>
      <GlobalNavigationBar year={year} setYear={setYear} />
      <Switch>
        <Route path="/year" component={AnnualCalendar} />
        {/* <Route path="/month" component={}/> */}
      </Switch>
    </>
  );
}

export default App;
