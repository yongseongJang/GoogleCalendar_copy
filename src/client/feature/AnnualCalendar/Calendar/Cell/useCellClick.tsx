import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { calendarState } from "../../../../recoil/calendar";
import dayjs from "dayjs";

const useCellClick = (year: number, month: number, date: number) => {
  const [calendar, setCalendar] = useRecoilState(calendarState);

  const day = useMemo(
    () => dayjs(year + "-" + month + "-" + date),
    [year, month, date],
  );

  const handleClick = useCallback(() => {
    setCalendar(calendar.update("selectedDate", () => day));
  }, [day]);

  return {
    isSelected: calendar.selectedDate === day,
    handleClick,
  };
};

export default useCellClick;
