import dayjs from "dayjs";

enum CALENDAR {
  DAY = "d",
  WEEK = "w",
  MONTH = "m",
  YEAR = "y",
}
interface calendar {
  selectedDate: dayjs.Dayjs | null;
}

export { CALENDAR, calendar as ICalendar };
