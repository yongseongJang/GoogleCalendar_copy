import * as React from "react";
import dayjs from "dayjs";
import { Calendar } from "../AnnualCalendar/Calendar";

function AnnualCalendar() {
  const year = dayjs().year();
  const month = dayjs().month() + 1;

  return (
    <>
      <Calendar year={year} month={month} />
    </>
  );
}

export default AnnualCalendar;
