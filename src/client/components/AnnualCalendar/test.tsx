import * as React from "react";
import { render } from "../../utils/test-utils";
import { AnnualCalendar } from "../AnnualCalendar";

const renderAnnualCalendar = () => {
  const result = render(<AnnualCalendar />);

  return {
    result,
  };
};

describe("<AnnualCalendar />", () => {
  it("renders AnnualCalendar component correctly", () => {
    const { result } = renderAnnualCalendar();
  });
});
