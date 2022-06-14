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

    const month = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];

    month.forEach((m) => {
      expect(result.getByText(m)).toBeInTheDocument();
    });
  });
});
