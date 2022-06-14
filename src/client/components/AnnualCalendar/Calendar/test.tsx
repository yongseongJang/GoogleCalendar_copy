import * as React from "react";
import { render } from "../../../utils/test-utils";
import { Calendar } from "../../AnnualCalendar/Calendar";

const renderCalendar = () => {
  const result = render(<Calendar year={2022} month={6} />);

  return {
    result,
  };
};

describe("<Calendar />", () => {
  it("renders Calendar component correctly", () => {
    const { result } = renderCalendar();

    const day = ["일", "월", "화", "수", "목", "금", "토"];

    day.forEach((d) => {
      expect(result.getByText(d)).toBeInTheDocument();
    });
  });
});
