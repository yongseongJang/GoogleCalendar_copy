/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useDialogSetting } from "../../hooks";
import { css } from "@emotion/react";

function DropdownDialog() {
  const { dialog, top, left, isVisible, items, handleClickItem } =
    useDialogSetting();

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
                  onClick={() => handleClickItem(item.url)}
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
  z-index: 1;
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
  color: #222;
  cursor: pointer;
  display: block;
  outline: none;
  position: relative;

  > div {
    line-height: 36px;
    height: 36px;
  }
`;

export default DropdownDialog;
