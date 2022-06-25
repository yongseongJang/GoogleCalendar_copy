/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useGNBSetting } from ".";
import { Button } from "../../components/Button";
import { css } from "@emotion/react";

function GlobalNavigationBar() {
  const { year, month, handleBeforeBtnClick, handleNextBtnClick } =
    useGNBSetting();

  return (
    <header>
      <div>
        <Button text={"오늘"} isDropDown={false} />
        <div css={periodChangeBtn}>
          <span onClick={handleBeforeBtnClick}>{`<`}</span>
        </div>
        <div css={periodChangeBtn}>
          <span onClick={handleNextBtnClick}>{`>`}</span>
        </div>
        <div css={date}>
          <span>{year}</span>
        </div>
        <Button text={"연도"} isDropDown={true} />
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
