/** @jsxImportSource @emotion/react */
import * as React from "react";
import dayjs from "dayjs";
import { css, jsx } from "@emotion/react";

interface CalendarProps {
  year: number;
  month: number;
}

function Calendar(props: CalendarProps) {
  const { year, month } = props;

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const lastDateOfMonth = dayjs(year + "-" + month).daysInMonth();
  const lastDateOfBeforeMonth = dayjs(`${year}-${month}-1`)
    .subtract(1, "day")
    .date();
  const firstDayOfMonth = dayjs(`${year}-${month}-1`).day();
  const lastDayOfMonth = dayjs(`${year}-${month}-${lastDateOfMonth}`).day();

  const dates = Array(firstDayOfMonth)
    .fill(null)
    .map((v, i) => i + 1 + (lastDateOfBeforeMonth - firstDayOfMonth))
    .concat(
      Array(lastDateOfMonth)
        .fill(null)
        .map((v, i) => i + 1),
    )
    .concat(
      Array(6 - lastDayOfMonth)
        .fill(null)
        .map((v, i) => i + 1),
    );

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
          <div css={tableRowGroup}>
            {Array(6)
              .fill(null)
              .map((value, index) => {
                return (
                  <div key={index} css={tableRow}>
                    {dates
                      .slice(index * 7, index * 7 + 7)
                      .map((date, index) => (
                        <span key={index} css={tableCell}>
                          {date}
                        </span>
                      ))}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
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

const tableRowGroup = css`
  display: table-row-group;
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

export default Calendar;
