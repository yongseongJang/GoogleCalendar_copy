import * as React from "react";
import dayjs from "dayjs";
import { Calendar } from "../AnnualCalendar/Calendar";

function AnnualCalendar() {
  const month = Array(12)
    .fill(null)
    .map((v, i) => i + 1);
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
