import * as React from "react";
import { render } from "../../../utils/test-utils";
import { Calendar } from "../../AnnualCalendar/Calendar";

const renderCalendar = () => {
  const result = render(<Calendar year={2022} month={6} />);

  return {
    result,
  };
};

describe("<Calendar />", () => {
  it("renders Calendar component correctly", () => {
    const { result } = renderCalendar();

    expect(result.getByText("일")).toBeInTheDocument();
    expect(result.getByText("월")).toBeInTheDocument();
    expect(result.getByText("화")).toBeInTheDocument();
    expect(result.getByText("수")).toBeInTheDocument();
    expect(result.getByText("목")).toBeInTheDocument();
    expect(result.getByText("금")).toBeInTheDocument();
    expect(result.getByText("토")).toBeInTheDocument();
  });
});
