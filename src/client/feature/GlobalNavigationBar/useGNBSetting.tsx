import * as React from "react";
import { useCallback } from "react";

const useGNBSetting = (
  year: number,
  setYear: React.Dispatch<React.SetStateAction<number>>,
) => {
  const handleBeforeBtnClick = useCallback(() => setYear(year - 1), [year]);
  const handleNextBtnClick = useCallback(() => setYear(year + 1), [year]);

  return {
    handleBeforeBtnClick,
    handleNextBtnClick,
  };
};

export default useGNBSetting;
