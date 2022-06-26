/** @jsxImportSource @emotion/react */
import * as React from "react";
import { DIALOG } from "../../enums";
import { useButtonSetting } from ".";
import { css } from "@emotion/react";

interface ButtonProps {
  text: string;
  isDropDown: boolean;
  dialogType?: DIALOG;
  onClick?: () => void;
  onDialogBtnClick?: (
    ref: React.RefObject<HTMLDivElement>,
    selectedBtn: DIALOG,
  ) => void;
}

function Button(props: ButtonProps) {
  const { btnRef, handleClick } = useButtonSetting(
    props.dialogType,
    props.onClick,
    props.onDialogBtnClick,
  );

  return (
    <div onClick={handleClick} css={button} ref={btnRef}>
      <div>
        <span css={text(props.isDropDown)}>{props.text}</span>
        {props.isDropDown && <span css={dropdownIcon}>▼</span>}
      </div>
    </div>
  );
}

const button = css`
  display: inline-block;
  margin-left: 20px;
  position: relative;
  bottom: 4px;
  cursor: pointer;

  > div {
    display: flex;
    position: relative;
    background-color: transparent;
    transition: background-color 100ms linear;
    height: 36px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const text = (isDropDown: boolean) => css`
  color: #3c4043;
  font-size: 14px;
  font-weight: 500;
  margin-top: 7px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;

  ${isDropDown &&
  `
    margin-right: 28px;
    `}
`;

const dropdownIcon = css`
  color: #80868b;
  position: absolute;
  margin-top: -10px;
  top: 60%;
  right: 2px;
  pointer-events: none;
  font-size: 10px;
  right: 10%;
`;

export default Button;
