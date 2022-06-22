/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useGNBSetting } from ".";
import { css } from "@emotion/react";

interface GlobalNavigationBarProps {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

function GlobalNavigationBar(props: GlobalNavigationBarProps) {
  const { handleBeforeBtnClick, handleNextBtnClick } = useGNBSetting(
    props.year,
    props.setYear,
  );

  return (
    <header>
      <div>
        <div css={periodChangeBtn}>
          <span onClick={handleBeforeBtnClick}>{`<`}</span>
        </div>
        <div css={periodChangeBtn}>
          <span onClick={handleNextBtnClick}>{`>`}</span>
        </div>
        <div css={date}>
          <span>{props.year}</span>
        </div>
      </div>
    </header>
  );
}

const periodChangeBtn = css`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(32, 33, 36, 0.039);
  }

  > span {
    top: -3px;
    position: relative;
    font-size: 24px;
    color: #5f6368;
  }
`;

const date = css`
  display: inline-block;
  position: relative;
  margin-left: 8px;

  > span {
    top: -2px;
    position: relative;
    font-size: 22px;
    font-weight: 400;
  }
`;

export default GlobalNavigationBar;