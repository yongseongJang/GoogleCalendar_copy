import * as React from "react";
import { fireEvent, render } from "../../../../utils/test-utils";
import * as hooks from "../../../../hooks";
import { Cell } from ".";
import dayjs from "dayjs";

const day = dayjs();

jest
  .spyOn(hooks, "useDateCalculation")
  .mockImplementation((year: number, month: number) => ({
    days: ["일", "월", "화", "수", "목", "금", "토"],
    dates: [day.subtract(1, "day").date()],
    includesToday: false,
    dateOfToday: day.date(),
  }));

const renderCell = () => {
  const year = day.year();
  const month = day.month();

  const { dates, includesToday, dateOfToday } = hooks.useDateCalculation(
    year,
    month,
  );

  const result = render(
    <Cell
      year={year}
      month={month}
      date={dates[0]}
      includesToday={includesToday}
      dateOfToday={dateOfToday}
    />,
  );

  const date = result.getByText(dates[0]);

  const clickDate = () => {
    fireEvent.click(date);
  };

  return {
    result,
    date,
    clickDate,
  };
};

describe("<Cell />", () => {
  it("if click the date, background color changes", () => {
    const { date, clickDate } = renderCell();

    expect(date).toHaveStyle("background-color: transparent");

    clickDate();

    expect(date).toHaveStyle("background-color: #d2e3fc");
  });
});
