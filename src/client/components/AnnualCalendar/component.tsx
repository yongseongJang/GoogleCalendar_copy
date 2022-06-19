/** @jsxImportSource @emotion/react */
import * as React from "react";
import dayjs from "dayjs";
import { Calendar } from "../AnnualCalendar/Calendar";
import { css } from "@emotion/react";

interface AnnualCalendarProps {
  year: number;
}

function AnnualCalendar(props: AnnualCalendarProps) {
  const month = Array(12)
    .fill(null)
    .map((v, i) => i + 1);
  const year = props.year;

  return (
    <div css={annualCalendar}>
      <div css={flexWrap}>
        {month.map((m) => (
          <Calendar key={m} year={year} month={m} />
        ))}
      </div>
    </div>
  );
}

const annualCalendar = css`
  flex: 1;
`;

const flexWrap = css`
  padding-right = 32px;
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
`;

export default AnnualCalendar;
