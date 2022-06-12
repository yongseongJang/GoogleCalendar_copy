/** @jsxImportSource @emotion/react */
import * as React from "react";
import dayjs from "dayjs";
import { css, jsx } from "@emotion/react";

interface CalendarProps {
  year: number;
  month: number;
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

function Calendar(props: CalendarProps) {
  const { year, month } = props;

  const lastDayOfMonth = dayjs(year + "-" + month).daysInMonth();

  return (
    <div>
      <div>
        <span
          css={css`
            color: #70757a;
          `}
        >{`${month}월`}</span>
      </div>
      {days.map((day) => (
        <span key={day}>{day}</span>
      ))}
    </div>
  );
}

export default Calendar;
