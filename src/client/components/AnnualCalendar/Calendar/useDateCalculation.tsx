import { useMemo } from "react";
import dayjs from "dayjs";

const useDateCalculation = (year: number, month: number) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const dates = useMemo(() => {
    const lastDateOfMonth = dayjs(year + "-" + month).daysInMonth();
    const lastDateOfBeforeMonth = dayjs(`${year}-${month}-1`)
      .subtract(1, "day")
      .date();
    const firstDayOfMonth = dayjs(`${year}-${month}-1`).day();
    const lastDayOfMonth = dayjs(`${year}-${month}-${lastDateOfMonth}`).day();

    return Array(firstDayOfMonth)
      .fill(null)
      .map((v, i) => i + 1 + (lastDateOfBeforeMonth - firstDayOfMonth))
      .concat(
        Array(lastDateOfMonth)
          .fill(null)
          .map((v, i) => i + 1),
      )
      .concat(
        Array(6 - lastDayOfMonth)
          .fill(null)
          .map((v, i) => i + 1),
      );
  }, [year, month]);

  return {
    days,
    dates,
  };
};

export default useDateCalculation;
