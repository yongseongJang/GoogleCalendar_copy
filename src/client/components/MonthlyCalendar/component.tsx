/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useDateCalculation } from "../../hooks";
import { Cell } from "./Cell";
import { css } from "@emotion/react";

interface MonthlyCalendarProps {
  year: number;
  month: number;
}

function MonthlyCalendar(props: MonthlyCalendarProps) {
  const { days, dates, includesToday, dateOfToday } = useDateCalculation(
    props.year,
    props.month,
  );

  return (
    <div css={calendar}>
      <div>
        <div>
          <div css={daysStyle}>
            {days &&
              days.map((day) => (
                <div key={day}>
                  <span>{day}</span>
                </div>
              ))}
          </div>
          <div css={cell}>
            {dates &&
              Array(Math.ceil(dates.length / 7))
                .fill(null)
                .map((value, index) => {
                  return (
                    <div key={index}>
                      <div>
                        {dates.slice(index * 7, index * 7 + 7).map((date) => (
                          <Cell key={date} date={date} />
                        ))}
                      </div>
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
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  border-top: #dadce0 1px solid;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    > div {
      border-left: #dadce0 1px solid;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      margin-left: 8px;
    }
  }
`;

const daysStyle = css`
  display: flex;
  height: 20px;

  > div {
    border-right: #dadce0 1px solid;
    flex: 1 1 0%;
    text-align: center;

    > span {
      color: #70757a;
      font-size: 11px;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;

const cell = css`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;

  > div {
    display: flex;
    position: relative;
    border-bottom: #dadce0 1px solid;
    flex: 1 1 0%;

    > div {
      display: flex;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

export default MonthlyCalendar;
