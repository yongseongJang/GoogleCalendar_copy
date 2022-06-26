/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useGNBSetting } from ".";
import { useDialogSetting } from "../../hooks";
import { Button } from "../../components/Button";
import { DropdownDialog } from "../../components/DropdownDialog";
import { DIALOG } from "../../enums";
import { css } from "@emotion/react";

function GlobalNavigationBar() {
  const {
    year,
    month,
    handleBeforeBtnClick,
    handleNextBtnClick,
    handleTodayBtnClick,
  } = useGNBSetting();

  const { handleDialogBtnClick } = useDialogSetting();

  return (
    <header css={gnbBar}>
      <div>
        <Button
          text={"오늘"}
          isDropDown={false}
          onClick={handleTodayBtnClick}
        />
        <div css={periodChangeBtn}>
          <span onClick={handleBeforeBtnClick}>{`<`}</span>
        </div>
        <div css={periodChangeBtn}>
          <span onClick={handleNextBtnClick}>{`>`}</span>
        </div>
        <div css={date}>
          <span>{year}</span>
        </div>
        <Button
          text={"연도"}
          isDropDown={true}
          dialogType={DIALOG.CALENDAR}
          onDialogBtnClick={handleDialogBtnClick}
        />
        <DropdownDialog />
      </div>
    </header>
  );
}

const gnbBar = css`
  margin-top: 10px;
  border-bottom: 1px solid #dadce0;
`;

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
