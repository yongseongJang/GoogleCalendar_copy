/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";

interface CellProps {
  date: number;
}

function Cell(props: CellProps) {
  return (
    <div css={cell}>
      <h2>{props.date}</h2>
    </div>
  );
}

const cell = css`
    line-height: 30px;
    color: #70757a
    font-size: 14px;
    text-align: center;
    background: transparent;
    flex: 1 1 0%;
    border-right: #dadce0 1px solid;

     > h2 {
        margin-top: 8px;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .3px;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        width: max-content;
        min-width: 24px;
        color: #70757a;
        line-height: 16px;
     }
`;

export default Cell;
