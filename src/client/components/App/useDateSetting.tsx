import { useState } from "react";
import dayjs from "dayjs";

const useDateSetting = () => {
  const day = dayjs();

  const [year, setYear] = useState<number>(day.year());

  return {
    year,
    setYear,
  };
};

export default useDateSetting;
