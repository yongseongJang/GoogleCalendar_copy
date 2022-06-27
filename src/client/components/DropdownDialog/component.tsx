/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useDialogSetting } from "../../hooks";
import { css } from "@emotion/react";

function DropdownDialog() {
  const { dialog, top, left, isVisible, items } = useDialogSetting();

  return (
    <div css={dialogStyle(isVisible, top, left)}>
      <div>
        <div>
          {items.length &&
            items.map((item, index) => {
              return (
                <span
                  key={item.title}
                  css={itemStyle}
                  onClick={item.handleClickItem}
                >
                  <div>
                    <div>{item.title}</div>
                  </div>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const dialogStyle = (
  isVisible: boolean,
  top: number | null,
  left: number | null,
) => css`
  position: absolute;
  top: ${top}px;
  left: ${left}px;
  z-index: 2000;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%);
  display: none;

  > div {
    overflow-x: hidden;
    overflow-y: visible;

    > div {
      padding: 8px 0;
    }
  }

  ${isVisible &&
  `
      display: block; 
    `}
`;

const itemStyle = css`
  padding-left: 16px;
  padding-right: 70px;
  color: #222;
  cursor: pointer;
  display: block;
  outline: none;
  position: relative;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background: #dadce0;
  }

  > div {
    line-height: 36px;
    height: 36px;
  }
`;

export default DropdownDialog;
