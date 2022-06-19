import * as React from "react";

const useGNBSetting = (
  year: number,
  setYear: React.Dispatch<React.SetStateAction<number>>,
) => {
  const handleBeforeBtnClick = () => setYear(year - 1);
  const handleNextBtnClick = () => setYear(year + 1);

  return {
    handleBeforeBtnClick,
    handleNextBtnClick,
  };
};

export default useGNBSetting;
