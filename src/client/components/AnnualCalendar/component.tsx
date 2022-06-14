import * as React from "react";
import dayjs from "dayjs";
import { Calendar } from "../AnnualCalendar/Calendar";

function AnnualCalendar() {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const year = dayjs().year();

  return (
    <>
      {month.map((m) => (
        <Calendar key={m} year={year} month={m} />
      ))}
    </>
  );
}

export default AnnualCalendar;
