import * as React from "react";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";

const render = (ui: React.ReactElement) => {
  function Wrapper({ children }: { children?: React.ReactElement }) {
    return <RecoilRoot>{children}</RecoilRoot>;
  }

  return rtlRender(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";
export { render };
