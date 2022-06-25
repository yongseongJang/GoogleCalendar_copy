import * as React from "react";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { gnbState } from "../../recoil/gnb";
import dayjs from "dayjs";

const useGNBSetting = (): {
  year: number;
  month: number;
  handleBeforeBtnClick: () => void;
  handleNextBtnClick: () => void;
  handleTodayBtnClick: () => void;
  handleDropDownClick: () => void;
} => {
  const [gnb, setGnb] = useRecoilState(gnbState);

  const year = dayjs().year();

  const handleBeforeBtnClick = () =>
    setGnb(gnb.update("year", () => gnb.year - 1));

  const handleNextBtnClick = () =>
    setGnb(gnb.update("year", () => gnb.year + 1));

  const handleTodayBtnClick = useCallback(() => {
    setGnb(gnb.update("year", () => year));
  }, [year]);

  const handleDropdownClick = useCallback(() => {}, []);

  return {
    year: gnb.year,
    month: gnb.month,
    handleBeforeBtnClick,
    handleNextBtnClick,
    handleTodayBtnClick,
    handleDropdownClick,
  };
};

export default useGNBSetting;
