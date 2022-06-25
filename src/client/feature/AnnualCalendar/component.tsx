/** @jsxImportSource @emotion/react */
import * as React from "react";
import { Calendar } from "../AnnualCalendar/Calendar";
import { useRecoilValue } from "recoil";
import { gnbState } from "../../recoil/gnb";
import { css } from "@emotion/react";

function AnnualCalendar() {
  const month = Array(12)
    .fill(null)
    .map((v, i) => i + 1);

  const gnb = useRecoilValue(gnbState);

  return (
    <div css={annualCalendar}>
      <div css={flexWrap}>
        {month.map((m) => (
          <Calendar key={m} year={gnb.year} month={m} />
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
