import React from "react";
import { render } from "@testing-library/react";
import RepositoriesSearch from "./search/RepositoriesSearch";

const renderInput = (value: string, handleChange: () => void) => {
  const utils = render(
    <RepositoriesSearch onChange={handleChange} value={value} />
  );

  const input = utils.getByPlaceholderText(/search/i);

  return { ...utils, input };
};

describe("repositories input", () => {
  it("renders input element", () => {
    let value = "tetris";
    const handleChange = jest.fn();
    const { input } = renderInput(value, handleChange);

    expect(input).toBeInTheDocument();
  });

  it("displays proper value", () => {
    let value = "tetris";
    const handleChange = jest.fn();
    const { input, rerender } = renderInput(value, handleChange);

    expect(input).toHaveValue(value);
    value = "react";

    rerender(<RepositoriesSearch onChange={handleChange} value={value} />);
    expect(input).toHaveValue("react");
  });
});
