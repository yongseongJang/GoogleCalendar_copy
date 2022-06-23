/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useCellClick } from ".";
import { css } from "@emotion/react";

interface CellProps {
  date: number;
  includesToday: boolean;
  dateOfToday: number;
}

function Cell(props: CellProps) {
  const { isSelected, handleClick } = useCellClick();
  return (
    <span onClick={handleClick} css={cell}>
      <div
        css={dateStyle(
          props.includesToday && props.dateOfToday === props.date,
          isSelected,
        )}
      >
        {props.date}
      </div>
    </span>
  );
}

const cell = () => css`
  font-size: 12px;
  font-weight: 400;
  display: table-cell;
  vertical-align: middle;
  color: #70757a;
  cursor: pointer;
`;

const dateStyle = (isToday: boolean, isSelected: boolean) => css`
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin: auto;
  font-weight: 500;
  border-radius: 50%;
  &:hover {
    background-color: #f1f3f4;
  }

  ${isToday &&
  `
    background-color: #1a73e8;
    color: #fff;

    &:hover {
      background-color: #1967d2;
    }
  `}
  ${!isToday &&
  isSelected &&
  `
    background-color: #d2e3fc;
    color: #185abc;

    &:hover {
      background-color: #aecbfa;
    }
    `}
`;

export default Cell;
