import * as React from "react";
import { render } from "../../utils/test-utils";
import * as Button from ".";

const buttonProps = {
  text: "오늘",
  isDropDown: false,
  onClick: jest.fn(),
};

const renderButton = () => {
  const result = render(
    <Button.Button
      text={buttonProps.text}
      isDropDown={buttonProps.isDropDown}
      onClick={buttonProps.onClick}
    />,
  );

  return {
    result,
  };
};

describe("<Button />", () => {
  it("renders Button component correctly", () => {
    const { result } = renderButton();

    expect(result.getByText(buttonProps.text)).toBeInTheDocument();
  });
});
