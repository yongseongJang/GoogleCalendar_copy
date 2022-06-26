import * as React from "react";
import { useCallback } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { DIALOG } from "../enums";
import { withItems } from "../recoil/dialog";
import { initialState } from "../recoil/dialog/atom";
import { dialogState } from "../recoil/dialog";
import { history } from "../utils/history";

const useDialogSetting = () => {
  const [dialog, setDialog] = useRecoilState(dialogState);

  const dialogWithItems: {
    dialog: DIALOG | null;
    top: number | null;
    left: number | null;
    isVisible: boolean;
    items: { title: string; url: string }[];
  } = useRecoilValue(withItems);

  const handleClickItem = (url: string) => {
    history.replace(url);
  };

  const handleDialogBtnClick = useCallback(
    (ref: React.RefObject<HTMLDivElement>, dialogType: DIALOG) => {
      if (dialog.isVisible) {
        setDialog(initialState);
      } else {
        const rect = ref.current ? ref.current.getBoundingClientRect() : null;
        const top = rect ? rect.bottom + 3 : 0;
        const left = rect ? rect.left : 0;

        setDialog(
          dialog
            .update("dialog", () => dialogType)
            .update("top", () => top)
            .update("left", () => left)
            .update("isVisible", () => true),
        );
      }
    },
    [dialog],
  );

  const closeDialog = useCallback(() => {
    setDialog(initialState);
  }, []);

  return {
    ...dialogWithItems,
    handleClickItem,
    handleDialogBtnClick,
    closeDialog,
  };
};

export default useDialogSetting;
