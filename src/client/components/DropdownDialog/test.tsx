import * as React from "react";
import { render } from "../../utils/test-utils";
import { DropdownDialog } from "./";
import * as hooks from "../../hooks";
import { DIALOG } from "../../enums";

jest.spyOn(hooks, "useDialogSetting").mockImplementation(() => ({
  dialog: DIALOG.CALENDAR,
  top: 0,
  left: 0,
  isVisible: true,
  items: [
    {
      title: "일",
      handleClickItem: jest.fn(),
    },
    {
      title: "주",
      handleClickItem: jest.fn(),
    },
    {
      title: "월",
      handleClickItem: jest.fn(),
    },
    {
      title: "연도",
      handleClickItem: jest.fn(),
    },
    {
      title: "일정",
      handleClickItem: jest.fn(),
    },
  ],
  handleDialogBtnClick: jest.fn(),
  closeDialog: jest.fn(),
}));

const renderDropdownDialog = () => {
  const result = render(<DropdownDialog />);

  return {
    result,
  };
};

describe("<DropdownDialog />", () => {
  it("renders DropdownDialog component correctly", () => {
    const { result } = renderDropdownDialog();

    const items = ["일", "주", "월", "연도", "일정"];

    items.forEach((item) => {
      expect(result.getByText(item)).toBeInTheDocument();
    });
  });
});
