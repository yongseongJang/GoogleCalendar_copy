/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";

interface DropDownProps {
  items: string[];
}

function DropdownDialog(props: DropDownProps) {
  return (
    <div css={dialog}>
      <div>
        <div>
          {props.items.length &&
            props.items.map((item, index) => {
              return (
                <span key={item} css={itemStyle}>
                  <div>
                    <div>{item}</div>
                  </div>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const dialog = css`
  position: absolute;

  > div {
    overflow-x: hidden;
    overflow-y: visible;

    > div {
      padding: 8px 0;
    }
  }
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
