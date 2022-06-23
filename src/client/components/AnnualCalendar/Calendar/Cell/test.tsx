import * as React from "react";
import { fireEvent, render } from "../../../../utils/test-utils";
import { useDateCalculation } from "../../../../hooks";
import { Cell } from ".";
import dayjs from "dayjs";

const renderCell = () => {
  const day = dayjs();
  const { dates, includesToday, dateOfToday } = useDateCalculation(
    day.year(),
    day.month(),
  );
  const result = render(
    <Cell
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

    expect(date).toHaveStyle("background-color: #ffffff");

    clickDate();

    expect(date).toHaveStyle("background-color: #d2e3fc");
  });
});
