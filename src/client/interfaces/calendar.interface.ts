import dayjs from "dayjs";

interface calendar {
  selectedDate: dayjs.Dayjs | null;
}

export { calendar as ICalendar };
