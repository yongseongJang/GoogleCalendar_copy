import { useState } from "react";
import dayjs from "dayjs";

const useDateSetting = () => {
  const day = dayjs();

  const [year, setYear] = useState<number>(day.year());

  const [month, setMonth] = useState<number>(day.month() + 1);

  return {
    year,
    setYear,
    month,
    setMonth,
  };
};

export default useDateSetting;
