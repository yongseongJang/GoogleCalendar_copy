import * as React from "react";
import { useRecoilValue } from "recoil";
import { DIALOG } from "../enums";
import { withItems } from "../recoil/dialog";
import { history } from "../utils/history";

const useDialogSetting = () => {
  const dialog: {
    dialog: DIALOG | null;
    top: number | null;
    left: number | null;
    isVisible: boolean;
    items: { title: string; url: string }[];
  } = useRecoilValue(withItems);

  const handleClickItem = (url: string) => {
    history.replace(url);
  };

  return {
    ...dialog,
    handleClickItem,
  };
};

export default useDialogSetting;
