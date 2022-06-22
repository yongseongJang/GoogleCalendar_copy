/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";

interface CellProps {
  date: number;
}

function Cell(props: CellProps) {
  return (
    <div css={cell}>
      <span>{props.date}</span>
    </div>
  );
}

const cell = css`
    line-height: 30px;
    color: #70757a
    font-size: 14px;
    text-align: center;
    background: transparent;
`;

export default Cell;
