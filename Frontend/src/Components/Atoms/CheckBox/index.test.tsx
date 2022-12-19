import { render, screen } from "@testing-library/react";
import { CheckBox } from ".";

describe('Checkbox atom', () => {
  it("renders checked button", () => {
    render(<CheckBox checked={true} />)
    const button = screen.getByTestId("CheckBox");
    expect(button).toBeTruthy();
  });

});