import * as React from "react";
import { render } from "../../../utils/test-utils";
import { Calendar } from "../../AnnualCalendar/Calendar";
import dayjs from "dayjs";

const renderCalendar = () => {
  const day = dayjs("2022-06-17");
  const result = render(<Calendar year={2022} month={6} />);

  const dateOfToday = () => result.getByText(day.date());

  return {
    result,
    dateOfToday,
  };
};

describe("<Calendar />", () => {
  it("renders day correctly", () => {
    const { result } = renderCalendar();

    const day = ["일", "월", "화", "수", "목", "금", "토"];

    day.forEach((d) => {
      expect(result.getByText(d)).toBeInTheDocument();
    });
  });

  it("renders today correctly", () => {
    const { dateOfToday } = renderCalendar();

    expect(dateOfToday()).toHaveStyle("background-color: #1a73e8");
  });
});
