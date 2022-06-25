import * as React from "react";
import { render, fireEvent } from "../../utils/test-utils";
import * as GlobalNavigationBar from ".";
import dayjs from "dayjs";

const day = dayjs();

const renderGlobalNavigationBar = () => {
  const day = dayjs();
  const result = render(<GlobalNavigationBar.GlobalNavigationBar />);

  const beforeBtn = result.getByText("<");
  const nextBtn = result.getByText(">");

  const clickBeforeBtn = () => {
    fireEvent.click(beforeBtn);
  };

  const clickNextBtn = () => {
    fireEvent.click(nextBtn);
  };

  return {
    result,
    beforeBtn,
    nextBtn,
    clickBeforeBtn,
    clickNextBtn,
    year: day.year(),
  };
};

describe("<GlobalNavigationBar/>", () => {
  it("fi click before btn ,calls setYear with year - 1", () => {
    const { result, clickBeforeBtn, year } = renderGlobalNavigationBar();

    clickBeforeBtn();

    expect(result.getByText(String(year - 1))).toBeInTheDocument();
  });

  it("fi click next btn ,calls setYear with year + 1", () => {
    const { result, clickNextBtn, year } = renderGlobalNavigationBar();

    clickNextBtn();

    expect(result.getByText(String(year + 1))).toBeInTheDocument();
  });
});
