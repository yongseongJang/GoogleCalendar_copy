import * as React from "react";
import { useRecoilState } from "recoil";
import { calendarState } from "../../recoil/calendar";

const useGNBSetting = () => {
  const [calendar, setCalendar] = useRecoilState(calendarState);

  const handleBeforeBtnClick = () =>
    setCalendar(calendar.update("year", () => calendar.year - 1));

  const handleNextBtnClick = () =>
    setCalendar(calendar.update("year", () => calendar.year + 1));

  return {
    year: calendar.year,
    month: calendar.month,
    handleBeforeBtnClick,
    handleNextBtnClick,
  };
};

export default useGNBSetting;
