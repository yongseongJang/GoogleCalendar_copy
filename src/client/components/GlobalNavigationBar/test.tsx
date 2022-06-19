import * as React from "react";
import { useState } from "react";
import { render, fireEvent } from "../../utils/test-utils";
import { GlobalNavigationBar } from ".";
import * as app from "../App";
import dayjs from "dayjs";

const day = dayjs();

jest
  .spyOn(app, "useDateSetting")
  .mockImplementation(() => ({ year: day.year(), setYear: jest.fn() }));

const renderGlobalNavigationBar = () => {
  const { year, setYear } = app.useDateSetting();
  const result = render(<GlobalNavigationBar year={year} setYear={setYear} />);

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
    year,
    setYear,
  };
};

describe("<GlobalNavigationBar/>", () => {
  it("fi click before btn ,calls setYear with year - 1", () => {
    const { clickBeforeBtn, year, setYear } = renderGlobalNavigationBar();

    clickBeforeBtn();

    expect(setYear).toHaveBeenCalledWith(year - 1);
  });

  it("fi click next btn ,calls setYear with year + 1", () => {
    const { clickNextBtn, year, setYear } = renderGlobalNavigationBar();

    clickNextBtn();

    expect(setYear).toHaveBeenCalledWith(year + 1);
  });
});
