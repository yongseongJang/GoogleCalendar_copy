import { atom } from "recoil";
import { Record } from "immutable";
import type { RecordOf } from "immutable";
import { CALENDAR } from "../../enums";
import dayjs from "dayjs";

interface IGnbState {
  calendar: CALENDAR;
  year: number;
  month: number;
  date: number;
}

const day = dayjs();

const defaultValues: IGnbState = {
  calendar: CALENDAR.YEAR,
  year: day.year(),
  month: day.month() + 1,
  date: day.date(),
};

const makeGnbState: Record.Factory<IGnbState> = Record(defaultValues);

export type gnbStateType = RecordOf<IGnbState>;

const initialState: gnbStateType = makeGnbState();

const gnbState = atom({
  key: "gnbState",
  default: initialState,
});

export default gnbState;
