import * as React from "react";
import { useRef } from "react";
import { DIALOG } from "../../enums";

const useButtonSetting = (
  dialogType: DIALOG | undefined,
  onClick: (() => void) | undefined,
  onDialogBtnClick:
    | ((ref: React.RefObject<HTMLDivElement>, selectedBtn: DIALOG) => void)
    | undefined,
) => {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (dialogType && onDialogBtnClick) {
      onDialogBtnClick(btnRef, dialogType);
    } else if (onClick) {
      onClick();
    }
  };

  return {
    btnRef,
    handleClick,
  };
};

export default useButtonSetting;
