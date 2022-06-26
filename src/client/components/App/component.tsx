/** @jsxImportSource @emotion/react */
import * as React from "react";
import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalNavigationBar } from "../../feature/GlobalNavigationBar";
import { useDialogSetting } from "../../hooks";
import { css } from "@emotion/react";

const AnnualCalendar = lazy(
  () => import("../../feature/AnnualCalendar/component"),
);
const MonthlyCalendar = lazy(
  () => import("../../feature/MonthlyCalendar/component"),
);

function App() {
  const { closeDialog } = useDialogSetting();

  return (
    <div css={app} onClick={closeDialog}>
      <GlobalNavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/year" component={AnnualCalendar} />
          <Route path="/month" component={MonthlyCalendar} />
        </Switch>
      </Suspense>
    </div>
  );
}

const app = css`
  height: 100%;
`;

export default App;
