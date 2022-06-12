import * as React from "react";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom";

const render = (ui: React.ReactElement) => {
  function Wrapper({ children }: { children?: React.ReactElement }) {
    return <>{children}</>;
  }

  return rtlRender(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";
export { render };
