import * as React from "react";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { gnbState } from "../../recoil/gnb";
import { dialogState } from "../../recoil/dialog";
import { initialState } from "../../recoil/dialog/atom";
import { DIALOG } from "../../enums";
import dayjs from "dayjs";

const useGNBSetting = (): {
  year: number;
  month: number;
  handleBeforeBtnClick: () => void;
  handleNextBtnClick: () => void;
  handleTodayBtnClick: () => void;
  handleDialogBtnClick: (
    ref: React.RefObject<HTMLDivElement>,
    selectedBtn: DIALOG,
  ) => void;
} => {
  const [gnb, setGnb] = useRecoilState(gnbState);
  const [dialog, setDialog] = useRecoilState(dialogState);

  const year = dayjs().year();

  const handleBeforeBtnClick = () =>
    setGnb(gnb.update("year", () => gnb.year - 1));

  const handleNextBtnClick = () =>
    setGnb(gnb.update("year", () => gnb.year + 1));

  const handleTodayBtnClick = useCallback(() => {
    setGnb(gnb.update("year", () => year));
  }, [gnb, year]);

  const handleDialogBtnClick = useCallback(
    (ref: React.RefObject<HTMLDivElement>, dialogType: DIALOG) => {
      if (dialog.isVisible) {
        setDialog(initialState);
      } else {
        const rect = ref.current ? ref.current.getBoundingClientRect() : null;
        const top = rect ? rect.bottom + 10 : 0;
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

  return {
    year: gnb.year,
    month: gnb.month,
    handleBeforeBtnClick,
    handleNextBtnClick,
    handleTodayBtnClick,
    handleDialogBtnClick,
  };
};

export default useGNBSetting;
