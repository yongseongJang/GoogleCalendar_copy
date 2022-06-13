/** @jsxImportSource @emotion/react */
import * as React from "react";
import dayjs from "dayjs";
import { css, jsx } from "@emotion/react";

interface CalendarProps {
  year: number;
  month: number;
}

const calendar = css`
  min-width: 288px;
  min-height: 252px;
  flex-basis: 25%;

  > div {
    width: 256px;
    padding: 0 16px 16px 16px;
    position: relative;
    @media (max-width: 1500px) {
      width: 208px;
    }
  }

  @media (max-width: 1500px) {
    min-width: 224px;
  }
`;

const monthly = css`
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  margin: 0px 4px;

  > span {
    color: #70757a;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.25px;
    line-height: 20px;
    padding-left: 5px;
  }
`;

const table = css`
  display: table;
  width: 100%;
`;

const tableRow = css`
  display: table-row;
  height: 28px;
`;

const tableCell = css`
  font-size: 12px;
  font-weight: 400;
  display: table-cell;
  vertical-align: middle;
  color: #70757a;
`;

const days = ["일", "월", "화", "수", "목", "금", "토"];

function Calendar(props: CalendarProps) {
  const { year, month } = props;

  const lastDayOfMonth = dayjs(year + "-" + month).daysInMonth();

  return (
    <div css={calendar}>
      <div>
        <div css={monthly}>
          <span>{`${month}월`}</span>
        </div>
        <div css={table}>
          <div css={tableRow}>
            {days.map((day) => (
              <span key={day} css={tableCell}>
                {day}
              </span>
            ))}
          </div>
          <div>
            <div>{}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
