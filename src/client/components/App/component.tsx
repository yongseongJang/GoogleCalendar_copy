import * as React from "react";
import { AnnualCalendar } from "../AnnualCalendar";
import { GlobalNavigationBar } from "../GlobalNavigationBar";
import { useDateSetting } from ".";

function App() {
  const { year, setYear } = useDateSetting();
  return (
    <>
      <GlobalNavigationBar year={year} setYear={setYear} />
      <AnnualCalendar year={year} />
    </>
  );
}

export default App;
