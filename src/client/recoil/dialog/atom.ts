import { atom } from "recoil";
import { Record } from "immutable";
import type { RecordOf } from "immutable";
import { DIALOG } from "../../enums";

interface IDialogState {
  dialog: DIALOG | null;
  top: number | null;
  left: number | null;
  isVisible: boolean;
}

const defaultValues: IDialogState = {
  dialog: null,
  top: null,
  left: null,
  isVisible: false,
};

const makeDialogState: Record.Factory<IDialogState> = Record(defaultValues);

export type dialogStateType = RecordOf<IDialogState>;

export const initialState: dialogStateType = makeDialogState();

const dialogState = atom({
  key: "dialogState",
  default: initialState,
});

export default dialogState;
