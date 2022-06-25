import { atom } from "recoil";
import { Record } from "immutable";
import type { RecordOf } from "immutable";
import { ICalendar } from "../../interfaces";
import dayjs from "dayjs";

const day = dayjs();

const defaultValues: ICalendar = {
  selectedDate: null,
};

const makeCalendarState: Record.Factory<ICalendar> = Record(defaultValues);

export type CalendarState = RecordOf<ICalendar>;

const initialState: CalendarState = makeCalendarState();

const calendarState = atom({
  key: "calendarState",
  default: initialState,
});

export default calendarState;
